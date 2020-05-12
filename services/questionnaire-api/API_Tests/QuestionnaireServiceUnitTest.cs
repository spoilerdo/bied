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
using Questionnaire.Mappings;

namespace ApiService_tests
{
    public class QuestionnaireServiceUnitTest
    {
        private readonly IQuestionnaireRepository _mockRepository = new MockQuestionnaireRepository();
        private readonly Mock<ServerCallContext> _mockContext = new Mock<ServerCallContext>();
        private readonly Mock<ILogger<QuestionnaireService>> _mockLogger = new Mock<ILogger<QuestionnaireService>>();
        
        private readonly MapperConfiguration _config = new MapperConfiguration(cfg => {
            cfg.AddProfile(new QuestionProfile());
            cfg.AddProfile(new QuestionnaireProfile());
        });
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper>();
        private readonly IMapper _mapper;
        private readonly QuestionnaireService _questionnaireService;

        public QuestionnaireServiceUnitTest()
        {
            _mapper = _config.CreateMapper();
            _questionnaireService = new QuestionnaireService(_mockLogger.Object, _mapper, _mockRepository);
        }

        [Fact]
        public async void createQuestionnaire()
        {
            // ARRANGE
            QuestionnaireCreateRequest request = new QuestionnaireCreateRequest
            {
                Name = "Request",
                Description = "request desc"
            };

            // ACT
            QuestionnaireResponse result = await _questionnaireService.CreateQuestionnaire(request, _mockContext.Object);

            //ASSERT
            Assert.NotNull(result);
            Assert.NotNull(result.Id);
            Assert.Equal("Request", result.Name);
        }

        [Fact]
        public async void createQuestionnaireMissingName()
        {
            // ARRANGE
            QuestionnaireCreateRequest request = new QuestionnaireCreateRequest
            {
                Description = "request desc"
            };

            //ASSERT
            var ex = await Assert.ThrowsAsync<RpcException>(async () => 
                // ACT
                await _questionnaireService.CreateQuestionnaire(request, _mockContext.Object)
            );

            //ASSERT
            Assert.Equal(ex.StatusCode, StatusCode.InvalidArgument);
        }

        [Fact]
        public async void getQuestionnaire()
        {
            // ARRANGE
            
            QuestionnaireEntity entity = new QuestionnaireEntity
            {
                Name = "Request",
                Description = "request desc",
                Question = new List<QuestionEntity>(),
                ModifiedOn = new DateTime()
            };

            await _mockRepository.CreateQuestionnaire(entity);

            QuestionnaireIdRequest request = new QuestionnaireIdRequest
            {
                Id = entity.ID
            };

            // ACT
            QuestionnaireResponse result = await _questionnaireService.GetQuestionnaire(request, _mockContext.Object);

            //ASSERT
            Assert.NotNull(result);
            Assert.Equal("Request", result.Name);
        }

        [Fact]
        public async void getQuestionnaireNonExisting()
        {
            // ARRANGE
            QuestionnaireIdRequest request = new QuestionnaireIdRequest
            {
                Id = "realid"
            };
            
            //ASSERT
            var ex = await Assert.ThrowsAsync<RpcException>(async () => 
                // ACT
                await _questionnaireService.GetQuestionnaire(request, _mockContext.Object)
            );

            Assert.Equal(ex.StatusCode, StatusCode.NotFound);
        }

        [Fact]
        public async void deleteQuestionnaire()
        {
            // ARRANGE
            QuestionnaireEntity entity = new QuestionnaireEntity
            {
                Name = "Request",
                Description = "request desc",
                Question = new List<QuestionEntity>(),
                ModifiedOn = new DateTime()
            };

            await _mockRepository.CreateQuestionnaire(entity);

            QuestionnaireIdRequest request = new QuestionnaireIdRequest
            {
                Id = entity.ID
            };

            // ACT
            QuestionnaireEmptyResponse result = await _questionnaireService.DeleteQuestionnaire(request, _mockContext.Object);

            //ASSERT
            Assert.NotNull(result);
        }

        [Fact]
        public async void deleteQuestionnaireNonExisting()
        {
            // ARRANGE
            QuestionnaireEntity entity = new QuestionnaireEntity
            {
                Name = "Request",
                Description = "request desc",
                Question = new List<QuestionEntity>(),
                ModifiedOn = new DateTime()
            };

            await _mockRepository.CreateQuestionnaire(entity);

            QuestionnaireIdRequest request = new QuestionnaireIdRequest
            {
                Id = "hallo"
            };

            // ACT
            QuestionnaireEmptyResponse result = await _questionnaireService.DeleteQuestionnaire(request, _mockContext.Object);

            //ASSERT
            Assert.NotNull(result);
        }

        [Fact]
        public async void updateQuestionnaire()
        {
            // ARRANGE
            QuestionnaireEditRequest request = new QuestionnaireEditRequest
            {
                Id = "realid",
                Description = "real deal",
                Name = "keyboard warrior",
            };
            QuestionnaireEntity entity = new QuestionnaireEntity
            {
                ID = "realid",
                Name = "Request",
                Description = "request desc",
                Question = new List<QuestionEntity>(),
                ModifiedOn = new DateTime()
            };
            QuestionnaireResponse response = new QuestionnaireResponse
            {
                Id = "realid",
                Name = "Request",
                Description = "request desc"
            };

            _mockMapper.Setup(x => x.Map<QuestionnaireResponse>(It.IsAny<QuestionnaireEntity>())).Returns(response);

            // ACT
            QuestionnaireResponse result = await _questionnaireService.UpdateQuestionnaire(request, _mockContext.Object);

            //ASSERT
            Assert.NotNull(result);
            Assert.Equal("Request", result.Name);
        }
    }
}
