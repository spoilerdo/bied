using Microsoft.EntityFrameworkCore;
using research_service.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Persistence.Context
{
    public class ResearchDbContext : DbContext
    {
        public ResearchDbContext(DbContextOptions<ResearchDbContext> options) : base(options) {
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ResearchDatasource>()
                .HasKey(bc => new { bc.ResearchId, bc.DatasourceId });

            modelBuilder.Entity<ResearchDatasource>()
                .HasOne(bc => bc.Research).WithMany(b => b.ResearchDataSources)
                .HasForeignKey(bc => bc.ResearchId);

            modelBuilder.Entity<ResearchEditor>()
            .HasKey(bc => new { bc.ResearchId, bc.UserId });

            modelBuilder.Entity<ResearchEditor>()
                .HasOne(bc => bc.Research).WithMany(b => b.ResearchEditors)
                .HasForeignKey(bc => bc.ResearchId);

            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<ResearchEntity> Researches { get; set; }
    }
}
