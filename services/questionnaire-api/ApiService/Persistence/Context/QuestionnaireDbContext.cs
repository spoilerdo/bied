using Microsoft.EntityFrameworkCore;
using Questionnaire.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace Questionnaire.Persistence.Context
{
  public class QuestionnaireDbContext : DbContext
  {
    public QuestionnaireDbContext(DbContextOptions<QuestionnaireDbContext> options) : base(options)
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

    public DbSet<QuestionnaireEntity> Researches { get; set; }
  }
}
