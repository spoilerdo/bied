using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("jwtData:JwtKey")));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            return new JwtSecurityToken(
                     issuer: _configuration.GetValue<string>("jwtData:Issuer"),
                     audience: _configuration.GetValue<string>("jwtData:Audience"),
                     claims: claims,
                     notBefore: DateTime.UtcNow,
                     expires: DateTime.UtcNow.AddHours(1),
                     signingCredentials: creds
            );
        }
    }
}
