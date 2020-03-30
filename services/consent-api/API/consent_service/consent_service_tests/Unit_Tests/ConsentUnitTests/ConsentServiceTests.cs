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

        // TODO this should also check if the correct Datasource is returned with it
        [Fact]
        public async void CreateConsent()
        {
            String userId = "631ae791-a25c-4268-a06e-4bb7fe0989aa";
            String datasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d";
            DateTime _dateTime = DateTime.Now.AddDays(1);

            //arrange
            ConsentRequest request = new ConsentRequest
            {
                UserId = userId,
                DatasourceId = datasourceId,
                Consent = true,
                Uts = 1585556966
            };
            ConsentEntity mappedEntity = new ConsentEntity
            {
                userId = userId,
                DatasourceId = datasourceId,
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
    }
}