using Microsoft.EntityFrameworkCore;
using research_service.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace research_service_tests
{
    public class InMemoryTestFixture : IDisposable
    {
        public ResearchDbContext _context => InMemoryContext();

        public void Dispose()
        {
            _context?.Dispose();
        }

        private static ResearchDbContext InMemoryContext()
        {
            var options = new DbContextOptionsBuilder<ResearchDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .EnableSensitiveDataLogging()
                .Options;
            var context = new ResearchDbContext(options);

            return context;
        }
    }


}
