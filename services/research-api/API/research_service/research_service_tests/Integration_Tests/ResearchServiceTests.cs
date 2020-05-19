using Grpc.Core;
using Grpc.Net.Client;
using research_service_tests.Fixture;
using ResearchGRPC;
using System;
using Xunit;

namespace research_service_tests.Integration_Tests
{
    [Collection("TestServerCollection")]
    public class ResearchServiceTests
    {
        private readonly TestServerFixture _testServer;

        public ResearchServiceTests(TestServerFixture testServer)
        {
            _testServer = testServer;
        }

        [Fact]
        public void AssureFixture()
        {
            ///IF THIS FAILS YOUR CONTENT ROOT IS MOST LIKELY NOT SET PROPERLY, SET THE PROPER LINK TO THE PROJECT AT <see cref="TestServerFixture"></see>
            Assert.NotNull(_testServer);
            var client = _testServer.Client;
            Assert.NotNull(client);
        }

        [Fact]
        public async void ShouldGetResearches()
        {
            var client = getGrpcClient();

            //Create two researches
            var createresponse = await client.CreateResearchAsync(
              new ResearchCreateRequest
              {
                  Name = "Mooie research",
                  Description = "Mooie Descriptie",
                  StartDate = 1584366981,
                  EndDate = 1584626181,
                  ImageUrl = "Hello.jpg",
                  OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3",
                  Active = true
              }
            );
            Assert.NotNull(createresponse);

            var createresponse2 = await client.CreateResearchAsync(
              new ResearchCreateRequest
              {
                  Name = "Mooie research",
                  Description = "Mooie Descriptie",
                  StartDate = 1584366981,
                  EndDate = 1584626181,
                  ImageUrl = "Hello.jpg",
                  OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3",
                  Active = true
              }
            );
            Assert.NotNull(createresponse2);

            //Check if request succeeds and gives back the expected researches (2)
            var response = await client.GetResearchesAsync(new GetResearchesRequest());
            Assert.NotNull(response);
            Assert.Equal(2, response.Researches_.Count);
        }

        [Fact]
        public async void ShouldGetResearch()
        {
            //arrange
            var client = getGrpcClient();

            var reply = await client.CreateResearchAsync(
                new ResearchCreateRequest { 
                    Name = "Mooie research", 
                    Description = "Mooie Descriptie", 
                    StartDate = 1584366981, 
                    EndDate = 1584626181,  
                    ImageUrl = "Hello.jpg", 
                    OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3", 
                    Active = true
                }
            );
            Assert.NotNull(reply);
            Assert.Equal("Mooie research", reply.Name);

            var GetResearch = await client.GetResearchAsync(new ResearchIdRequest { Id = reply.Id });
            Assert.NotNull(GetResearch);

            var deleteResponse = await client.DeleteResearchAsync(new ResearchIdRequest { Id = GetResearch.Id });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldGetResearchThatDoesNotExist()
        {
            var researchClient = getGrpcClient();

            Action act = () =>
            {
                researchClient.GetResearchAsync(new ResearchIdRequest { Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202" }).GetAwaiter().GetResult();
            };
            Assert.Throws<RpcException>(act);
        }

        [Fact]
        public async void ShouldCreateResearch()
        {
            var client = getGrpcClient();
            //Create research
            var createresponse = await client.CreateResearchAsync(
              new ResearchCreateRequest
              {
                  Name = "Mooie research",
                  Description = "Mooie Descriptie",
                  StartDate = 1584366981,
                  EndDate = 1584626181,
                  ImageUrl = "Hello.jpg",
                  OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3",
                  Active = true
              }
            );
            Assert.NotNull(createresponse);

            var response = await client.GetResearchAsync(new ResearchIdRequest { Id = createresponse.Id });
            Assert.NotNull(response);

            var deleteResponse = await client.DeleteResearchAsync(new ResearchIdRequest { Id = response.Id });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldFailToCreateIncompleteResearch()
        {
            var client = getGrpcClient();

            Action act = () =>
            {
                client.CreateResearchAsync(
                    new ResearchCreateRequest
                    {
                        Name = "Mooie research",
                        Description = "Mooie Descriptie",
                        StartDate = 1584366981,
                        EndDate = 1584626181
                    }
                ).GetAwaiter().GetResult();
            };
            Assert.Throws<RpcException>(act);
        }

        [Fact]
        public async void ShouldDeleteResearch()
        {
            var client = getGrpcClient();
            //Create research
            var createresponse = await client.CreateResearchAsync(
              new ResearchCreateRequest
              {
                  Name = "Mooie research",
                  Description = "Mooie Descriptie",
                  StartDate = 1584366981,
                  EndDate = 1584626181,
                  ImageUrl = "Hello.jpg",
                  OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3",
                  Active = true
              }
            );
            Assert.NotNull(createresponse);

            var deleteResponse = await client.DeleteResearchAsync(new ResearchIdRequest { Id = createresponse.Id });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldFailToDeleteResearchThatDoesNotExist()
        {
            var client = getGrpcClient();
            Action act = () =>
            {
                client.DeleteResearchAsync(new ResearchIdRequest { Id = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202" }).GetAwaiter().GetResult();
            };
            Assert.Throws<RpcException>(act);
        }

        [Fact]
        public async void ShouldEditResearch()
        {
            var client = getGrpcClient();

            //Create two researches
            var createresponse = await client.CreateResearchAsync(
              new ResearchCreateRequest
              {
                  Name = "Mooie research",
                  Description = "Mooie Descriptie",
                  StartDate = 1584366981,
                  EndDate = 1584626181,
                  ImageUrl = "Hello.jpg",
                  OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3",
                  Active = true
              }
            );
            Assert.NotNull(createresponse);

            var editresponse = await client.EditResearchAsync(new ResearchEditRequest
            {
                Id = createresponse.Id,
                Name = "EDITED RESEARCH NAME",
                Description = createresponse.Description,
                Active = createresponse.Active,
                ImageUrl = createresponse.ImageUrl,
                StartDate = createresponse.StartDate,
                EndDate = createresponse.EndDate,
                OwnerId = createresponse.OwnerId
            });
            Assert.NotNull(editresponse);
            Assert.Equal(editresponse.Id, createresponse.Id);
            Assert.Equal("EDITED RESEARCH NAME", editresponse.Name);

            var deleteResponse = await client.DeleteResearchAsync(new ResearchIdRequest { Id = editresponse.Id });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldFailToEditResearchThatDoesNotExist()
        {
            var client = getGrpcClient();
            Action act = () =>
            {
                client.EditResearchAsync(new ResearchEditRequest
                {
                    Id = "79aa398c-5991-4c2e-81bc-4b224009c2c3",
                    Name = "EDITED RESEARCH NAME",
                    Description = "EDITED DESCRIPTION",
                    Active = false,
                    ImageUrl = "hello darkness",
                    StartDate = 1584366981,
                    EndDate = 1584626181,
                    OwnerId = "79aa398c-5991-4c2e-81bc-4b224009c2c3"
                }).GetAwaiter().GetResult();
            };
            Assert.Throws<RpcException>(act);
        }

        private Research_Service.Research_ServiceClient getGrpcClient()
        {
            //arrange
            GrpcChannelOptions options = new GrpcChannelOptions()
            {
                HttpClient = _testServer.Client
            };
            var channel = GrpcChannel.ForAddress("http://localhost", options);
            return new Research_Service.Research_ServiceClient(channel);
        }
    }
}
