
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