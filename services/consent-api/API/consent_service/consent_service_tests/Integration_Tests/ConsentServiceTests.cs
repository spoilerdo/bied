using System.Net;

using Grpc.Core;
using Grpc.Net.Client;
using System;
using consent_service_tests.Fixture;
using Xunit;
using consent_service.Services;

namespace consent_service_tests.Integration_Tests
{
    [Collection("TestServerCollection")]
    public class ConsentServiceTests
    {
        private readonly TestServerFixture _testServer;

        public ConsentServiceTests(TestServerFixture testServer)
        {
            _testServer = testServer;
        }

        [Fact]
        public void AssureFixture()
        {
            Assert.NotNull(_testServer);
            var client = _testServer.Client;
            Assert.NotNull(client);
        }

        [Fact]
        public async void ShouldGetConsents()
        {
            var client = getGrpcClient();

            var createConsent = await client.CreateConsentAsync(
               new ConsentRequest
               {
                   UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                   DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                   Consent = true,
                   Uts = 1585556966
               }
           );
            Assert.NotNull(createConsent);

            var createConsent2 = await client.CreateConsentAsync(
               new ConsentRequest
               {
                   UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                   DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0b",
                   Consent = true,
                   Uts = 1585556966
               }
           );
            Assert.NotNull(createConsent2);

            var response = await client.GetConsentsAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
            Assert.NotNull(response);
            Assert.Equal(2, response.Consents_.Count);

            var deleteResponse = await client.DeleteAllConsentAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public async void ShouldGetConsent()
        {
            var client = getGrpcClient();
            var createConsent = await client.CreateConsentAsync(
              new ConsentRequest
              {
                  UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                  DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                  Consent = true,
                  Uts = 1585556966
              }
            );
            Assert.NotNull(createConsent);

            var GetConsent = await client.GetConsentAsync(new ConsentIdRequest { ConsentId = createConsent.Id });
            Assert.NotNull(GetConsent);

            var deleteResponse = await client.DeleteAllConsentAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldGetConsentThatDoesNotExist()
        {
            var client = getGrpcClient();

            Action act = () =>
            {
                client.GetConsentAsync(new ConsentIdRequest { ConsentId = "e8802d57-c1b9-4d08-b4b4-bbf3de9ff202" }).GetAwaiter().GetResult();
            };

            Assert.Throws<RpcException>(act);
        }

        [Fact]
        public async void ShouldCreateConsent()
        {
            var client = getGrpcClient();

            Console.WriteLine("Succesfully got the client");

            var createConsent = await client.CreateConsentAsync(
                new ConsentRequest
                {
                    UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                    DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                    Consent = true,
                    Uts = 1585556966
                }
            );
            Assert.NotNull(createConsent);

            Console.WriteLine("After first Assert");

            var response = await client.GetConsentsAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
            Assert.NotNull(response);

            var deleteResponse = await client.DeleteAllConsentAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldFailToCreateImcompleteConsent()
        {
            var client = getGrpcClient();

            Action act = () =>
            {
                client.CreateConsentAsync(
                    new ConsentRequest
                    {
                        DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                        Consent = true,
                        Uts = 1585556966
                    }
                ).GetAwaiter().GetResult();
            };

            Assert.Throws<RpcException>(act);
        }

        [Fact]
        public async void ShouldDeleteAllConsent()
        {
            var client = getGrpcClient();

            var createConsent = await client.CreateConsentAsync(
               new ConsentRequest
               {
                   UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                   DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                   Consent = true,
                   Uts = 1585556966
               }
           );
            Assert.NotNull(createConsent);

            var createConsent2 = await client.CreateConsentAsync(
               new ConsentRequest
               {
                   UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                   DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0b",
                   Consent = true,
                   Uts = 1585556966
               }
           );
            Assert.NotNull(createConsent2);

            var deleteResponse = await client.DeleteAllConsentAsync(new UserIdRequest { Id = createConsent.UserId });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public async void ShouldDeleteConsent()
        {
            var client = getGrpcClient();

            var createConsent = await client.CreateConsentAsync(
               new ConsentRequest
               {
                   UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                   DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                   Consent = true,
                   Uts = 1585556966
               }
           );
            Assert.NotNull(createConsent);

            var deleteResponse = await client.DeleteConsentAsync(new ConsentIdRequest { ConsentId = createConsent.Id });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldFailToDeleteConsentThatDoesNotExist()
        {
            var client = getGrpcClient();
            Action act = () =>
            {
                client.DeleteConsentAsync(new ConsentIdRequest { ConsentId = "631ae791-a25c-4268-a06e-4bb7fe0989aa" }).GetAwaiter().GetResult();
            };

            Assert.Throws<RpcException>(act);
        }

        [Fact]
        public async void ShouldEditConsent()
        {
            var client = getGrpcClient();

            var createResponse = await client.CreateConsentAsync(
              new ConsentRequest
              {
                  UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                  DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                  Consent = true,
                  Uts = 1585556966
              }
          );
            Assert.NotNull(createResponse);

            var editResponse = await client.EditConsentAsync(
                 new ConsentEditRequest
                 {
                     Id = createResponse.Id,
                     UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                     DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                     Consent = false,
                     Uts = 1585556966
                 }
            );

            Assert.NotNull(editResponse);
            Assert.Equal(editResponse.Id, createResponse.Id);
            Assert.Equal(false, editResponse.Consent_);

            var deleteResponse = await client.DeleteAllConsentAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
            Assert.NotNull(deleteResponse);
        }

        [Fact]
        public void ShouldFailToEditConsentThatDoesNotExist()
        {
            var client = getGrpcClient();
            Action act = () =>
            {
                client.EditConsentAsync(new ConsentEditRequest
                {
                    Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                    UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
                    DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
                    Consent = false,
                    Uts = 1585556966
                }).GetAwaiter().GetResult();
            };
            Assert.Throws<RpcException>(act);
        }

        private Consent_Service.Consent_ServiceClient getGrpcClient()
        {
            GrpcChannelOptions options = new GrpcChannelOptions()
            {
                HttpClient = _testServer.Client
            };
            var channel = GrpcChannel.ForAddress("http://localhost", options);
            return new Consent_Service.Consent_ServiceClient(channel);
        }
    }
}