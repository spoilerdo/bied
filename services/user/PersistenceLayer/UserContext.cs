using Microsoft.EntityFrameworkCore;
using System;
using UserService;

namespace PersistenceLayer
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public UserContext()
        {
        }

        public UserContext(DbContextOptions options) : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(x => x.Guid).HasDefaultValueSql("NEWID()");
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
