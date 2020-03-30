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
    }
}