using AuthenticationService.Persistence.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace AuthenticationService.Persistence
{
    public class AuthenticationContext : DbContext
    {
        public DbSet<UserAuthenticationData> UsersData { get; set; }
        public DbContextOptions<AuthenticationContext> Options { get; private set; }

        public AuthenticationContext(DbContextOptions options) : base (options)
        {
        }

        public AuthenticationContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }

}
