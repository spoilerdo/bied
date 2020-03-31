using Xunit;

namespace consent_service_tests.Collection
{
    [CollectionDefinition("InMemoryCollection")]
    public class InMemoryCollection : ICollectionFixture<InMemoryTestFixture>
    {
    }
}