using Microsoft.EntityFrameworkCore;
using System;

namespace Tests
{
    public class InMemoryContext<T> : IDisposable where T : DbContext
    {
        private readonly T realcontext;

        public void Dispose()
        {
            realcontext?.Dispose();
        }

        public InMemoryContext()
        {
            var options = new DbContextOptionsBuilder()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .EnableSensitiveDataLogging()
                .Options;
            realcontext = Activator.CreateInstance(typeof(T), new object[] { options }) as T;

        }

        public static implicit operator T(InMemoryContext<T> context) => context.realcontext;
    }
}
