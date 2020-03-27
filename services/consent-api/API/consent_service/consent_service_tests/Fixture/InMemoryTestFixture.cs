using System;
using consent_service.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace consent_service_tests
{
    public class InMemoryTestFixture : IDisposable
    {
        public ConsentDbContext _context => InMemoryContext();
        public void Dispose()
        {
            _context?.Dispose();
        }

        private static ConsentDbContext InMemoryContext()
        {
            var options = new DbContextOptionsBuilder<ConsentDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .EnableSensitiveDataLogging()
                .Options;
            var context = new ConsentDbContext(options);

            return context;
        }
    }
}