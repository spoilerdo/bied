using System;
using System.Collections.Generic;
using ApiService_tests.Mock;
using AutoMapper;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using Moq;
using Questionnaire.GRPC;
using Questionnaire.Persistence.Entities;
using Questionnaire.Persistence.Repositories;
using Questionnaire.Services;
using Xunit;

namespace API_Tests
{
    public class QuestionnaireResultServiceUnitTest
    {
        private readonly Mock<IQuestionnaireResultRepository> _mockRepo = new Mock<IQuestionnaireResultRepository>();
        private readonly Mock<ServerCallContext> _mockContext = new Mock<ServerCallContext>();
        private readonly Mock<ILogger<QuestionnaireResultService>> _mockLogger = new Mock<ILogger<QuestionnaireResultService>>();
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper>();
        private readonly QuestionnaireResultService _questionnaireResultService;

        public QuestionnaireResultServiceUnitTest()
        {
            _questionnaireResultService = new QuestionnaireResultService(_mockLogger.Object, _mockMapper.Object, _mockRepo.Object);
        }

        [Fact]
        public async void GetQuestionnaireResult()
        {
            // Arrange
            getQuestionnaireResultRequest request = new getQuestionnaireResultRequest
            {
                Id = "MockId"
            };

            QuestionnaireResponseEntity entity = new QuestionnaireResponseEntity
            {
                Name = "veryRealName",
                Description = "veryRealDiscription",
                QuestionAnswers = new List<QuestionAnswerEntity>()
            };

            QuestionnaireResults response = new QuestionnaireResults
            {
                Id = "MockId",
                Name = "veryRealName",
                Description = "veryRealDiscription"
            };

            _mockMapper.Setup(x => x.Map<QuestionnaireResults>(It.IsAny<QuestionnaireResponseEntity>())).Returns(response);
            // Act

            QuestionnaireResults result = await _questionnaireResultService.GetQuestionnaireResult(request, _mockContext.Object);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("veryRealName", result.Name);
        }
    }
}