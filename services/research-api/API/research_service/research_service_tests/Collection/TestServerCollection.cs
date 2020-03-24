using research_service_tests.Fixture;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace research_service_tests.Collection
{
    [CollectionDefinition("TestServerCollection")]
    public class TestServerCollection : ICollectionFixture<TestServerFixture>
    {
    }
}
