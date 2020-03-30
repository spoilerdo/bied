using AutoMapper;
using Grpc.Core;
using Moq;
using research_service.Common;
using research_service.Persistence.Entities;
using research_service.Persistence.Repositories.Researches;
using research_service.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace research_service_tests.Unit_Tests.ResearchUnitTests
{
    public class ResearchServiceTests
    {
        private readonly Mock<IResearchRepository> _mockRepository = new Mock<IResearchRepository>();
        private readonly Mock<ServerCallContext> _mockContext = new Mock<ServerCallContext>();
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper>();
        private readonly ResearchService _researchService;

        public ResearchServiceTests()
        {
            _researchService = new ResearchService(_mockRepository.Object, _mockMapper.Object);
        }

        [Fact]
        public async void CreateResearch()
        {
            //arrange
            ResearchCreateRequest request = new ResearchCreateRequest
            {
                Name = "Test Research",
                Description = "Mooie descriptie",
                StartDate = 1584449853,
                EndDate = 1585054653
            };
            ResearchEntity mappedEntity = new ResearchEntity{
                Name = "Test Research",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-2),
                EndDate = DateTime.Now.AddDays(2)
            };
            Research responseEntity = new Research
            {
                Name = "Test Research",
                Description = "Mooie descriptie",
                StartDate = 1584449853,
                EndDate = 1585054653
            };

            _mockMapper.Setup(x => x.Map<ResearchEntity>(It.IsAny<ResearchCreateRequest>())).Returns(mappedEntity);
            _mockRepository.Setup(x => x.CreateResearch(It.IsAny<ResearchEntity>())).ReturnsAsync(new DataResponseObject<ResearchEntity>(mappedEntity));
            _mockMapper.Setup(x => x.Map<Research>(It.IsAny<ResearchEntity>())).Returns(responseEntity);

            //act
            var response = await _researchService.CreateResearch(request, _mockContext.Object);

            //assert
            Assert.NotNull(response);
            Assert.Equal("Test Research", response.Name);
            _mockMapper.Verify(x => x.Map<ResearchEntity>(request), Times.Once);
            _mockMapper.Verify(x => x.Map<Research>(mappedEntity), Times.Once);
            _mockRepository.Verify(x => x.CreateResearch(mappedEntity), Times.Once);
        }

        [Fact]
        public async void EditResearch()
        {
            //arrange
            ResearchEditRequest request = new ResearchEditRequest
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202",
                Name = "Test Edit Research",
                Description = "Mooie descriptie",
                StartDate = 1584449853,
                EndDate = 1585054653
            };
            ResearchEntity mappedEntity = new ResearchEntity
            {
                Id = new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"),
                Name = "Test Edit Research",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-2),
                EndDate = DateTime.Now.AddDays(2)
            };
            Research responseEntity = new Research
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202",
                Name = "Test Edit Research",
                Description = "Mooie descriptie",
                StartDate = 1584449853,
                EndDate = 1585054653
            };

            _mockMapper.Setup(x => x.Map<ResearchEntity>(It.IsAny<ResearchEditRequest>())).Returns(mappedEntity);
            _mockRepository.Setup(x => x.UpdateResearch(It.IsAny<Guid>(), It.IsAny<ResearchEntity>())).ReturnsAsync(new DataResponseObject<ResearchEntity>(mappedEntity));
            _mockMapper.Setup(x => x.Map<Research>(It.IsAny<ResearchEntity>())).Returns(responseEntity);

            var response = await _researchService.EditResearch(request, _mockContext.Object);

            Assert.NotNull(response);
            Assert.Equal("Test Edit Research", response.Name);
            _mockMapper.Verify(x => x.Map<ResearchEntity>(request), Times.Once);
            _mockMapper.Verify(x => x.Map<Research>(mappedEntity), Times.Once);
            _mockRepository.Verify(x => x.UpdateResearch(mappedEntity.Id, mappedEntity), Times.Once);
        }

        [Fact]
        public async void DeleteResearch()
        {
            ResearchIdRequest request = new ResearchIdRequest
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"
            };

            _mockRepository.Setup(x => x.DeleteResearch(It.IsAny<Guid>())).ReturnsAsync(new DataResponseObject<ResearchEntity>(true));

            var response = await _researchService.DeleteResearch(request, _mockContext.Object);
            Assert.NotNull(response);
            _mockRepository.Verify(x => x.DeleteResearch(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202")), Times.Once);
        }

        [Fact]
        public async void GetResearch()
        {
            ResearchIdRequest request = new ResearchIdRequest
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"
            };
            ResearchEntity mappedEntity = new ResearchEntity
            {
                Id = new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"),
                Name = "Test Research",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-2),
                EndDate = DateTime.Now.AddDays(2)
            };
            Research responseEntity = new Research
            {
                Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202",
                Name = "Test Research",
                Description = "Mooie descriptie",
                StartDate = 1584449853,
                EndDate = 1585054653
            };

            _mockMapper.Setup(x => x.Map<ResearchEntity>(It.IsAny<ResearchIdRequest>())).Returns(mappedEntity);
            _mockRepository.Setup(x => x.GetResearchById(It.IsAny<Guid>())).ReturnsAsync(new DataResponseObject<ResearchEntity>(mappedEntity));
            _mockMapper.Setup(x => x.Map<Research>(It.IsAny<ResearchEntity>())).Returns(responseEntity);

            var response = await _researchService.GetResearch(request, _mockContext.Object);
            Assert.NotNull(response);
            Assert.Equal(responseEntity, response);
        }
    }
}
