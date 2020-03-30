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
    public class ConsentRepositoryTests : IDisposable
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

        [Fact]
        public async void ShouldCreateConsent()
        {
            //arrange
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ef",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            //act
            var response = await _consentRepository.CreateConsent(consent);

            //assert
            var results = await _consentRepository.GetConsents(new Guid(response.Data.userId));
            Assert.NotNull(results);
            Assert.Equal(1, results.Data.Count());
            Assert.Equal(results.Data.First(), response.Data);
        }

    }
}