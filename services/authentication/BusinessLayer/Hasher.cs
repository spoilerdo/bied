using System;
using AuthenticationService;
using BCrypt.Net;
using Microsoft.EntityFrameworkCore;

namespace AuthenticationServer
{
    public class BCryptHasher : IHasher
    {
        public string Hash(string toHash, string salt)
        {
            return BCrypt.Net.BCrypt.HashPassword(toHash, salt);
        }

        public string GenerateSalt()
        {
            return BCrypt.Net.BCrypt.GenerateSalt();
        }

        public bool Verify(string hash, string checking)
        {
            return BCrypt.Net.BCrypt.Verify(checking, hash);
        }
    }
}
