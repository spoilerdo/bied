
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

        // TODO fix the delete request
        // TODO should this delete the consent, or change it to false
        // [Fact]
        // public async void ShouldCreateConsent()
        // {
        //     var client = getGrpcClient();

        //     var createConsent = await client.CreateConsentAsync(
        //         new ConsentRequest
        //         {
        //             UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
        //             DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
        //             Consent = true,
        //             Uts = 1585556966
        //         }
        //     );
        //     Assert.NotNull(createConsent);

        //     var response = await client.GetConsentsAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
        //     Assert.NotNull(response);

        //     // TODO one of the following, depends on taken decision, see above todo
        //     // Deleting all consents for user
        //     var deleteResponse = await client.DeleteAllConsentAsync(new UserIdRequest { Id = "631ae791-a25c-4268-a06e-4bb7fe0989aa" });
        //     Assert.NotNull(deleteResponse);

        //     // Delete specific consent for user
        //     var deleteResponse2 = await client.DeleteConsentAsync(new DeleteConsentRequest { UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa", Id = "Idk, need to get this id somehow" });
        //     Assert.NotNull(deleteResponse2);

        //     // Setting consent to false
        //     var updateResponse = await client.EditConsentAsync(new ConsentEditRequest
        //     {
        //         Id = "Idk, need to get the id somehow",
        //         UserId = "631ae791-a25c-4268-a06e-4bb7fe0989aa",
        //         DatasourceId = "ee1b957f-d490-4229-b489-885565cb5b0d",
        //         Consent = true,
        //         Uts = 1585556966
        //     });
        //     Assert.NotNull(updateResponse);
        // }

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