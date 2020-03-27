using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using MockServer;
using research_service;
using research_service.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace research_service_tests.Fixture
{
    public class TestServerFixture : TestServerFixture<Startup, ResearchDbContext>
    {
        protected override string RelativePathToHostProject => @"../../../../research_service";
        protected override void ConfigureAppConfiguration(WebHostBuilderContext hostingContext, IConfigurationBuilder config)
        {
        }
    }
}
