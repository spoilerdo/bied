using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using UserSvc.Domain;

namespace UserSvc.Security.Token
{
    public class TokenGenerator : ITokenGenerator
    {
        private readonly IConfiguration _configuration;
        public TokenGenerator(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private string CreateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

        public RefreshToken GenerateRefreshToken()
        {
            return new RefreshToken
            {
                Token = CreateRefreshToken(),
                Expiration = DateTime.UtcNow.AddMonths(2)
            };
        }

        public JwtSecurityToken GenerateToken(List<Claim> claims)
        {
            RSA rsa = ReadKeyFromFile("key/rsa_key");
            var creds = new SigningCredentials(new RsaSecurityKey(rsa), SecurityAlgorithms.RsaSha256);

            return new JwtSecurityToken(
                     issuer: _configuration.GetValue<string>("jwtData:Issuer"),
                     audience: _configuration.GetValue<string>("jwtData:Audience"),
                     claims: claims,
                     notBefore: DateTime.UtcNow,
                     expires: DateTime.UtcNow.AddHours(1),
                     signingCredentials: creds
            );
        }

        private static RSA ReadKeyFromFile(string filename)
        {
            string pemContents = System.IO.File.ReadAllText(filename);
            const string RsaPrivateKeyHeader = "-----BEGIN RSA PRIVATE KEY-----";
            const string RsaPrivateKeyFooter = "-----END RSA PRIVATE KEY-----";

            if (pemContents.StartsWith(RsaPrivateKeyHeader))
            {
                int endIdx = pemContents.IndexOf(
                    RsaPrivateKeyFooter,
                    RsaPrivateKeyHeader.Length,
                    StringComparison.Ordinal);

                string base64 = pemContents.Substring(
                    RsaPrivateKeyHeader.Length,
                    endIdx - RsaPrivateKeyHeader.Length);

                byte[] der = Convert.FromBase64String(base64);
                RSA rsa = RSA.Create();
                rsa.ImportRSAPrivateKey(der, out _);
                return rsa;
            }

            // "BEGIN PRIVATE KEY" (ImportPkcs8PrivateKey),
            // "BEGIN ENCRYPTED PRIVATE KEY" (ImportEncryptedPkcs8PrivateKey),
            // "BEGIN PUBLIC KEY" (ImportSubjectPublicKeyInfo),
            // "BEGIN RSA PUBLIC KEY" (ImportRSAPublicKey)
            // could any/all be handled here.
            throw new InvalidOperationException();
        }


    }
}
