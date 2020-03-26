using consent_service.Persistence.Entities;
using consent_service.Persistence.Repositories.Consents;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace consent_service_tests.Unit_Tests.ConsentUnitTests
{
    [Collection("InMemoryCollection")]
    public class ConsentRepositoryTests: IDisposable
    {
        private readonly IConsentRepository _consentRepository;
        private readonly InMemoryTestFixture _fixture;

        public ConsentRepositoryTests(InMemoryTestFixture fixture)
        {
            _fixture = fixture;
            _consentRepository = new ConsentRepository(fixture._context);
        }

        public void Dispose()
        {
            _fixture?.Dispose();
        }
        
    } 
}