using consent_service_tests.Fixture;
using Xunit;

namespace consent_service_tests.Collection
{
    [CollectionDefinition("TestServerCollection")]
    public class TestServerCollection : ICollectionFixture<TestServerFixture>
    {
        
    }
}