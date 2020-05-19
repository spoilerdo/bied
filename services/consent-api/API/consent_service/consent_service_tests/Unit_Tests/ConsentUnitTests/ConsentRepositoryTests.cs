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

        [Fact]
        public async void ShouldGetConsents()
        {
            //arrange
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            ConsentEntity consent2 = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0b",
                Uts = DateTime.Now
            };

            //act
            await _consentRepository.CreateConsent(consent);
            await _consentRepository.CreateConsent(consent2);

            //assert
            var result = await _consentRepository.GetConsents(new Guid("f5235866-6b81-413b-ae89-4a5f44da78ea"));
            Assert.Equal(2, result.Data.Count());
        }

        [Fact]
        public async void ShouldGetConsent()
        {

            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };
            var response = await _consentRepository.CreateConsent(consent);
            Assert.NotNull(response);

            var getResult = await _consentRepository.GetConsent(response.Data.Id);
            Assert.NotNull(getResult);
            Assert.Equal(consent, getResult.Data);
        }

         [Fact]
        public async void ShouldFailToGetConsent()
        {
            var getResult = await _consentRepository.GetConsent(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"));
            Assert.False(getResult.Success);
        }

        [Fact]
        public async void ShouldGetConsentsNoResults()
        {
            //assert
            var result = await _consentRepository.GetConsents(new Guid("f5235866-6b81-413b-ae89-4a5f44da78ea"));
            Assert.Equal(0, result.Data.Count());
        }

        [Fact]
        public async void ShouldEditConsent()
        {
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            var reponse = await _consentRepository.CreateConsent(consent);
            reponse.Data.Consent = false;

            var editResult = await _consentRepository.EditConsent(consent);
            Assert.NotNull(editResult);
            Assert.Equal(false, editResult.Data.Consent);
        }

        [Fact]
        public async void FailToEdit()
        {
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            // Consent not created, should fail

            var editResult = await _consentRepository.EditConsent(consent);
            Assert.False(editResult.Success);
        }

        [Fact]
        public async void ShouldDeleteConsent()
        {
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            var response = await _consentRepository.CreateConsent(consent);
            Assert.NotNull(response.Data);

            var deleteResult = await _consentRepository.DeleteConsent(response.Data.Id);
            Assert.True(deleteResult.Success);

            var getResults = await _consentRepository.GetConsents(new Guid(response.Data.userId));
            Assert.Equal(0, getResults.Data.Count());
        }

        [Fact]
        public async void FailDeleteConsent()
        {
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            var response = await _consentRepository.CreateConsent(consent);
            Assert.NotNull(response.Data);

            var deleteResult = await _consentRepository.DeleteConsent(new Guid("ee1b957f-d490-4229-b489-885565cb5b0d"));
            Assert.False(deleteResult.Success);

            var getResults = await _consentRepository.GetConsents(new Guid(response.Data.userId));
            Assert.Equal(1, getResults.Data.Count());
        }

        [Fact]
        public async void ShouldDeleteAllConsent()
        {
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            ConsentEntity consent2 = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = false,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0b",
                Uts = DateTime.Now
            };


            var response = await _consentRepository.CreateConsent(consent);
            Assert.NotNull(response.Data);

            var response2 = await _consentRepository.CreateConsent(consent2);
            Assert.NotNull(response2.Data);

            var getResultsBefore = await _consentRepository.GetConsents(new Guid(response.Data.userId));
            Assert.Equal(2, getResultsBefore.Data.Count());

            var deleteResult = await _consentRepository.DeleteAllConsent(new Guid(response.Data.userId));
            Assert.True(deleteResult.Success);

            var getResults = await _consentRepository.GetConsents(new Guid(response.Data.userId));
            Assert.Equal(0, getResults.Data.Count());
        }

        [Fact]
        public async void FailDeleteAllConsent()
        {
            ConsentEntity consent = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = true,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Uts = DateTime.Now
            };

            ConsentEntity consent2 = new ConsentEntity
            {
                userId = "f5235866-6b81-413b-ae89-4a5f44da78ea",
                Consent = false,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0b",
                Uts = DateTime.Now
            };

            var response = await _consentRepository.CreateConsent(consent);
            Assert.NotNull(response.Data);

            var response2 = await _consentRepository.CreateConsent(consent2);
            Assert.NotNull(response2.Data);

            var deleteResult = await _consentRepository.DeleteConsent(new Guid("ee1b957f-d490-4229-b489-885565cb5b0d"));
            Assert.False(deleteResult.Success);

            var getResults = await _consentRepository.GetConsents(new Guid(response.Data.userId));
            Assert.Equal(2, getResults.Data.Count());
        }

    }
}