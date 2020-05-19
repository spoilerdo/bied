using AutoMapper;
using Grpc.Core;
using Moq;
using consent_service.Common;
using consent_service.Persistence.Entities;
using consent_service.Persistence.Repositories.Consents;
using consent_service.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace consent_service_tests.Unit_Tests.ConsentUnitTests
{
    public class ConsentServiceTests
    {
        private readonly Mock<IConsentRepository> _mockRepository = new Mock<IConsentRepository>();
        private readonly Mock<ServerCallContext> _mockContext = new Mock<ServerCallContext>();
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper>();
        private readonly ConsentService _consentService;
        private readonly String userId = "631ae791-a25c-4268-a06e-4bb7fe0989aa";

        public ConsentServiceTests()
        {
            _consentService = new ConsentService(_mockRepository.Object, _mockMapper.Object);
        }

        [Fact]
        public async void ShouldGetConsents()
        {

        }

        [Fact]
        public async void ShouldGetConsent()
        {
            ConsentIdRequest request = new ConsentIdRequest()
            {
                ConsentId = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"
            };

            ConsentEntity mappedEntity = new ConsentEntity
            {
                Id = new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"),
                userId = userId,
                DatasourceId = null,
                Consent = true,
                Uts = DateTime.Now.AddDays(2)
            };

            Consent responseEnitity = new Consent
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202",
                UserId = userId,
                Datasource = new Datasource(),
                Consent_ = true,
                Uts = 1585556966
            };

            _mockMapper.Setup(x => x.Map<ConsentEntity>(It.IsAny<ConsentIdRequest>())).Returns(mappedEntity);
            _mockRepository.Setup(x => x.GetConsent(It.IsAny<Guid>())).ReturnsAsync(new DataResponseObject<ConsentEntity>(mappedEntity));
            _mockMapper.Setup(x => x.Map<Consent>(It.IsAny<ConsentEntity>())).Returns(responseEnitity);

            var response = await _consentService.GetConsent(request, _mockContext.Object);
            Assert.NotNull(response);
            Assert.Equal(responseEnitity, response);
        }

        [Fact]
        public async void ShouldCreateConsent()
        {
            //arrange
            ConsentRequest request = new ConsentRequest
            {
                UserId = userId,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Consent = true,
                Uts = 1585556966
            };
            ConsentEntity mappedEntity = new ConsentEntity
            {
                userId = userId,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Consent = true,
                Uts = DateTime.Now.AddDays(1)
            };
            Consent responseEnitity = new Consent
            {
                UserId = userId,
                Datasource = new Datasource(),
                Consent_ = true,
                Uts = 1585556966
            };

            _mockMapper.Setup(x => x.Map<ConsentEntity>(It.IsAny<ConsentRequest>())).Returns(mappedEntity);
            _mockRepository.Setup(x => x.CreateConsent(It.IsAny<ConsentEntity>())).ReturnsAsync(new DataResponseObject<ConsentEntity>(mappedEntity));
            _mockMapper.Setup(x => x.Map<Consent>(It.IsAny<ConsentEntity>())).Returns(responseEnitity);

            // act
            var response = await _consentService.CreateConsent(request, _mockContext.Object);

            // assert
            Assert.NotNull(response);
            Assert.Equal(userId, response.UserId);
            _mockMapper.Verify(x => x.Map<ConsentEntity>(request), Times.Once);
            _mockMapper.Verify(x => x.Map<Consent>(mappedEntity), Times.Once);
            _mockRepository.Verify(x => x.CreateConsent(mappedEntity), Times.Once);
        }

        [Fact]
        public async void ShouldEditConsent()
        {
            //arrange
            ConsentEditRequest request = new ConsentEditRequest
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202",
                UserId = userId,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Consent = false,
                Uts = 1585556966
            };
            ConsentEntity mappedEntity = new ConsentEntity
            {
                Id = new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"),
                userId = userId,
                DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                Consent = false,
                Uts = DateTime.Now.AddDays(1)
            };
            Consent responseEntity = new Consent
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202",
                UserId = userId,
                Datasource = new Datasource(),
                Consent_ = false,
                Uts = 1585556966
            };

            _mockMapper.Setup(x => x.Map<ConsentEntity>(It.IsAny<ConsentEntity>())).Returns(mappedEntity);
            _mockRepository.Setup(x => x.EditConsent(It.IsAny<ConsentEntity>())).ReturnsAsync(new DataResponseObject<ConsentEntity>(mappedEntity));
            _mockMapper.Setup(x => x.Map<Consent>(It.IsAny<ConsentEntity>())).Returns(responseEntity);

            var response = await _consentService.EditConsent(request, _mockContext.Object);

            Assert.NotNull(response);
            Assert.Equal(false, response.Consent_);
            _mockMapper.Verify(x => x.Map<ConsentEntity>(request), Times.Once);
            _mockMapper.Verify(x => x.Map<Consent>(mappedEntity), Times.Once);
            // _mockRepository.Verify(x => x.EditConsent(mappedEntity), Times.Once);
        }

        [Fact]
        public async void ShouldDeleteConsent()
        {
            ConsentIdRequest request = new ConsentIdRequest
            {
                ConsentId = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"
            };

            _mockRepository.Setup(x => x.DeleteConsent(It.IsAny<Guid>())).ReturnsAsync(new DataResponseObject<ConsentEntity>(true));

            var response = await _consentService.DeleteConsent(request, _mockContext.Object);
            Assert.NotNull(response);
            _mockRepository.Verify(x => x.DeleteConsent(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202")), Times.Once);
        }

        [Fact]
        public async void ShouldDeleteAllConsent()
        {
            UserIdRequest request = new UserIdRequest
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"
            };

            _mockRepository.Setup(x => x.DeleteAllConsent(It.IsAny<Guid>())).ReturnsAsync(new DataResponseObject<ConsentEntity>(true));

            var response = await _consentService.DeleteAllConsent(request, _mockContext.Object);
            Assert.NotNull(response);
            _mockRepository.Verify(x => x.DeleteAllConsent(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202")), Times.Once);
        }
    }
}