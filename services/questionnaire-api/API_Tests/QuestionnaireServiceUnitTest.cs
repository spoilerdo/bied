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

namespace ApiService_tests {
    public class QuestionnaireServiceUnitTest {
        private readonly IQuestionnaireRepository _mockRepository = new MockQuestionnaireRepository ();
        private readonly Mock<ServerCallContext> _mockContext = new Mock<ServerCallContext> ();
        private readonly Mock<ILogger<QuestionnaireService>> _mockLogger = new Mock<ILogger<QuestionnaireService>> ();
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper> ();
        private readonly QuestionnaireService _questionnaireService;

        public QuestionnaireServiceUnitTest () {
            _questionnaireService = new QuestionnaireService (_mockLogger.Object, _mockMapper.Object, _mockRepository);
        }

        [Fact]
        public async void createQuestionnaire () {
            // ARRANGE
            QuestionnaireCreateRequest request = new QuestionnaireCreateRequest {
                Name = "Request",
                Description = "request desc"
            };
            QuestionnaireEntity entity = new QuestionnaireEntity {
                ID = "realid",
                Name = "Request",
                Description = "request desc",
                Questions = new List<QuestionEntity> (),
                ModifiedOn = new DateTime ()
            };
            QuestionnaireResponse response = new QuestionnaireResponse {
                Id = "realid",
                Name = "Request",
                Description = "request desc"
            };

            _mockMapper.Setup (x => x.Map<QuestionnaireResponse> (It.IsAny<QuestionnaireEntity> ())).Returns (response);

            // ACT
            QuestionnaireResponse result = await _questionnaireService.CreateQuestionnaire (request, _mockContext.Object);

            //ASSERT
            Assert.NotNull (result);
            Assert.Equal ("Request", response.Name);
        }

        [Fact]
        public async void getQuestionnaire () {
            // ARRANGE
            QuestionnaireIdRequest request = new QuestionnaireIdRequest {
                Id = "realid"
            };
            QuestionnaireEntity entity = new QuestionnaireEntity {
                ID = "realid",
                Name = "Request",
                Description = "request desc",
                Questions = new List<QuestionEntity> (),
                ModifiedOn = new DateTime ()
            };
            QuestionnaireResponse response = new QuestionnaireResponse {
                Id = "realid",
                Name = "Request",
                Description = "request desc"
            };

            _mockMapper.Setup (x => x.Map<QuestionnaireResponse> (It.IsAny<QuestionnaireEntity> ())).Returns (response);

            // ACT
            QuestionnaireResponse result = await _questionnaireService.GetQuestionnaire (request, _mockContext.Object);

            //ASSERT
            Assert.NotNull (result);
            Assert.Equal ("Request", response.Name);
        }

        [Fact]
        public async void deleteQuestionnaire () {
            // ARRANGE
            QuestionnaireIdRequest request = new QuestionnaireIdRequest {
                Id = "realid"
            };
            QuestionnaireEmptyResponse response = new QuestionnaireEmptyResponse { };

            // ACT
            QuestionnaireEmptyResponse result = await _questionnaireService.DeleteQuestionnaire (request, _mockContext.Object);

            //ASSERT
            Assert.NotNull (result);
        }

        [Fact]
        public async void updateQuestionnaire () {
            // ARRANGE
            QuestionnaireEditRequest request = new QuestionnaireEditRequest {
                Id = "realid",
                Description = "real deal",
                Name = "keyboard warrior",
            };
            QuestionnaireEntity entity = new QuestionnaireEntity {
                ID = "realid",
                Name = "Request",
                Description = "request desc",
                Questions = new List<QuestionEntity> (),
                ModifiedOn = new DateTime ()
            };
            QuestionnaireResponse response = new QuestionnaireResponse {
                Id = "realid",
                Name = "Request",
                Description = "request desc"
            };

            _mockMapper.Setup (x => x.Map<QuestionnaireResponse> (It.IsAny<QuestionnaireEntity> ())).Returns (response);

            // ACT
            QuestionnaireResponse result = await _questionnaireService.UpdateQuestionnaire (request, _mockContext.Object);

            //ASSERT
            Assert.NotNull (result);
            Assert.Equal ("Request", response.Name);
        }
    }
}