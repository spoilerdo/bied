using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.OpenSsl;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace UserSvc.Security.Jwk
{
    public class JwkGenerator : IJwkGenerator
    {
        private string publicKey;

        public JwkGenerator()
        {
            //fetch public key from file.
            publicKey = File.ReadAllText("key/rsa_key.pub");
        }

        public JsonWebKey GenerateJwk()
        {
            using (var textReader = new StringReader(publicKey))
            {
                var pubkeyReader = new PemReader(textReader);
                RsaKeyParameters KeyParameters = (RsaKeyParameters)pubkeyReader.ReadObject();
                var e = Base64UrlEncoder.Encode(KeyParameters.Exponent.ToByteArrayUnsigned());
                var n = Base64UrlEncoder.Encode(KeyParameters.Modulus.ToByteArrayUnsigned());

                return new JsonWebKey
                {
                    Alg = "RS256",
                    Kty = "RSA",
                    Use = "sig",
                    E = e,
                    N = n
                };
            }
        }
    }
}
