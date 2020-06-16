using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using UserSvc.Domain;

namespace UserSvc.Security.Token
{
    public interface ITokenGenerator
    {
        public JwtSecurityToken GenerateToken(List<Claim> claims);
        public RefreshToken GenerateRefreshToken();
    }
}
