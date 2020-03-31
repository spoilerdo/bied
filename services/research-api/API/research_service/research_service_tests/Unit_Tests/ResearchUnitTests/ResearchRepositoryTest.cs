using research_service.Persistence.Entities;
using research_service.Persistence.Repositories.Researches;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace research_service_tests.Unit_Tests.ResearchUnitTests
{
    [Collection("InMemoryCollection")]
    public class ResearchRepositoryTest : IDisposable
    {
        private readonly IResearchRepository _researchRepository;
        private readonly InMemoryTestFixture _fixture;

        public ResearchRepositoryTest(InMemoryTestFixture fixture)
        {
            _fixture = fixture;
            _researchRepository = new ResearchRepository(fixture._context);
        }

        [Fact]
        public async void ShouldCreateResearch()
        {
            //arrange
            ResearchEntity research = new ResearchEntity{
                Name = "Test Research", 
                Description = "Mooie descriptie", 
                StartDate = DateTime.Now.AddDays(-1), 
                EndDate = DateTime.Now.AddDays(1)
            };

            //act
            var response = await _researchRepository.CreateResearch(research);

            //assert
            var result = await _researchRepository.GetResearchById(response.Data.Id);
            Assert.NotNull(result);
            Assert.Equal(result.Data, response.Data);
        }

        [Fact]
        public async void ShouldEditResearch()
        {
            ResearchEntity research = new ResearchEntity
            {
                Name = "Test Researchje",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-1),
                EndDate = DateTime.Now.AddDays(1)
            };

            //act
            var response = await _researchRepository.CreateResearch(research);
            response.Data.Name = "EDITED RESEARCH NAME";

            var editResult = await _researchRepository.UpdateResearch(response.Data.Id, response.Data);
            Assert.NotNull(editResult);
            Assert.Equal("EDITED RESEARCH NAME", editResult.Data.Name);
        }

        [Fact]
        public async void ShouldFailToEdit()
        {
            ResearchEntity research = new ResearchEntity
            {
                Name = "Test Researchje",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-1),
                EndDate = DateTime.Now.AddDays(1)
            };

            var editResult = await _researchRepository.UpdateResearch(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"), research);
            Assert.False(editResult.Success);
        }

        [Fact]
        public async void ShouldGetResearch()
        {
            ResearchEntity research = new ResearchEntity
            {
                Name = "Test Researchje",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-1),
                EndDate = DateTime.Now.AddDays(1)
            };

            //act
            var response = await _researchRepository.CreateResearch(research);

            var GetResult = await _researchRepository.GetResearchById(response.Data.Id);
            Assert.NotNull(GetResult);
            Assert.Equal(research, GetResult.Data);
        }

        [Fact]
        public async void ShouldFailToGet()
        {
            var getResult = await _researchRepository.GetResearchById(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"));
            Assert.False(getResult.Success);
        }

        [Fact]
        public async void ShouldDeleteResearch()
        {
            ResearchEntity research = new ResearchEntity
            {
                Name = "Test Researchje",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-1),
                EndDate = DateTime.Now.AddDays(1)
            };

            //act
            var response = await _researchRepository.CreateResearch(research);
            Assert.NotNull(response.Data);

            var deleteResult = await _researchRepository.DeleteResearch(response.Data.Id);
            Assert.True(deleteResult.Success);

            var getResult = await _researchRepository.GetResearchById(response.Data.Id);
            Assert.False(getResult.Success);
        }

        [Fact]
        public async void ShouldFailToDelete()
        {
            var deleteResult = await _researchRepository.DeleteResearch(new Guid("e8802d57-c1b9-4d08-b4b4-bbf3de9ff202"));
            Assert.False(deleteResult.Success);
        }

        [Fact]
        public async void ShouldGetResearches()
        {
            ResearchEntity research = new ResearchEntity
            {
                Name = "Test Researchje",
                Description = "Mooie descriptie",
                StartDate = DateTime.Now.AddDays(-1),
                EndDate = DateTime.Now.AddDays(1)
            };

            ResearchEntity research2 = new ResearchEntity
            {
                Name = "Test Researchje2",
                Description = "Mooie descriptie2",
                StartDate = DateTime.Now.AddDays(-2),
                EndDate = DateTime.Now.AddDays(2)
            };

            //act
            await _researchRepository.CreateResearch(research);
            await _researchRepository.CreateResearch(research2);
            //act
            var result = await _researchRepository.GetResearches();
            Assert.Equal(2, result.Data.Count());
        }


        public void Dispose()
        {
            _fixture?.Dispose();
        }
    }
}
