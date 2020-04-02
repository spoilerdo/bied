using AuthenticationService;
using AuthenticationService.Persistence;
using AuthenticationService.Persistence.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;

namespace AuthenticationServer
{
    public class Logic
    {
        /// <summary>
        /// TODO Private jwt key needs to be defined in deployment env. 
        /// </summary>
        private const string privateJwtKey = "4o-648t0b-Sj0IS6EfKnhLJOthYbJJf8s26B4GCHq2PD_DmoCKX6vj7pGrQ-X7FkmvDiadjqQyneygSu8mrMZ1vrh1TtFTpU9K0KvRvluvvjt3VTVTOgDjsifhKoVsU61FLj67gbRUql6kEgi9LeG5Extr1tlhxqRro7CeoU48c";

        private AuthenticationContext AuthenticationContext { get; set; }
        private IHasher Hasher { get; set; }

        public Logic(AuthenticationContext authenticationContext)
        {
            Hasher = new BCryptHasher();
            AuthenticationContext = authenticationContext;
        }

        public bool VerifyPassword(Guid userId, string checkingPassword)
        {
            var userAuthenticationData = GetUserData(userId);

            var hashedpassword = userAuthenticationData.HashedPassword;

            return Hasher.Verify(hashedpassword, checkingPassword);

        }

        public void CreateUserAuthenticationData(Guid userId, string password)
        {

            // Check user with this id already exists.
            bool doubleEntry = AuthenticationContext.UsersData.Count(u => u.UserId == userId) > 0;
            if (doubleEntry)
                throw new BusinessException($"Userdata with id={userId} already exists");

            var data = new UserAuthenticationData
            {
                UserId = userId,
                Salt = Hasher.GenerateSalt()
            };
            data.HashedPassword = Hasher.Hash(password, data.Salt);

            AuthenticationContext.Add(data);
            AuthenticationContext.SaveChanges();
        }

        public void DeleteUserAuthenticationData(Guid userId)
        {
            var userdata = GetUserData(userId);
            AuthenticationContext.Remove(userdata);
            AuthenticationContext.SaveChanges();
        }

        public string GenerateJwtToken(Guid userId, string password)
        {

            //Check if the credentials are correct
            if (!VerifyPassword(userId, password))
                throw new BusinessException($"Wrong credentials");


            var payload = new JwtPayload
            {
               { "userId", userId},
            };

            string key = privateJwtKey;
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var header = new JwtHeader(credentials);
            var token = new JwtSecurityToken(header, payload);

            var handler = new JwtSecurityTokenHandler();
            var tokenString = handler.WriteToken(token);

            return tokenString;
        }

        private UserAuthenticationData GetUserData(Guid userId)
        {
            var user = AuthenticationContext.UsersData.SingleOrDefault(s => s.UserId == userId);

            //Check if user exists
            if (user == null)
                throw new BusinessException($"No authentication data found for user with id={userId}");

            return user;
        }
    }
}
