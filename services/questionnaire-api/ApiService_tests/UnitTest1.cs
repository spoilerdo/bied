using System;
using System.Collections.Generic;
using AutoMapper;
using Xunit;
using Moq;
using Questionnaire.Persistence.Repositories;
using Questionnaire.Persistence.Entities;
using Questionnaire.GRPC;
using ApiService_tests.Mock;
using Microsoft.Extensions.Logging;
using Questionnaire.Services;
using Grpc.Core;

namespace ApiService_tests
{
    public class QuestionnaireServiceUnitTest
    {
        private readonly IQuestionnaireRepository _mockRepository = new MockQuestionnaireRepository();
        private readonly Mock<ServerCallContext> _mockContext = new Mock<ServerCallContext>();
        private readonly Mock<ILogger<QuestionnaireService>> _mockLogger = new Mock<ILogger<QuestionnaireService>>();
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper>();
        private readonly QuestionnaireService _questionnaireService;

        public QuestionnaireServiceUnitTest() {
            _questionnaireService = new QuestionnaireService(_mockLogger.Object, _mockMapper.Object, _mockRepository);
        }

        [Fact]
        public async void createQuestionnaire()
        {
            // ARRANGE
            QuestionnaireCreateRequest request = new QuestionnaireCreateRequest{
             Name = "Request",
             Description = "request desc"
            };
            QuestionnaireEntity entity = new QuestionnaireEntity{
                ID = "realid",
                Name = "Request",
                Description = "request desc",
                Questions = new List<QuestionEntity>(),
                ModifiedOn = new DateTime()
            };
            QuestionnaireResponse response = new QuestionnaireResponse{
                Id = "realid",
                Name = "Request",
                Description = "request desc"
            };

            _mockMapper.Setup(x => x.Map<QuestionnaireResponse>(It.IsAny<QuestionnaireEntity>())).Returns(response);

            // ACT
            QuestionnaireResponse result = await _questionnaireService.CreateQuestionnaire(request, _mockContext.Object);

            //ASSERT
            Assert.NotNull(result);
            Assert.Equal("Request", response.Name);
        }
    }
}
