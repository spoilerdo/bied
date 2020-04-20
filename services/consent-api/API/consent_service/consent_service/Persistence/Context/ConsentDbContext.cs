using consent_service.Persistence.Entities;
using Microsoft.EntityFrameworkCore;



namespace consent_service.Persistence.Context
{
    public class ConsentDbContext : DbContext
    {
        public ConsentDbContext(DbContextOptions<ConsentDbContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {            
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<ConsentEntity> Consents {get; set;}
    }
}