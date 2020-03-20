using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace research_service_tests.Collection
{
    [CollectionDefinition("InMemoryCollection")]
    public class InMemoryCollection : ICollectionFixture<InMemoryTestFixture>
    {
    }
}
