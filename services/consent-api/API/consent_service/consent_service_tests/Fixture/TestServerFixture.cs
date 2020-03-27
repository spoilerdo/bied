using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using MockServer;
using consent_service;
using consent_service.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;


namespace consent_service_tests.Fixture
{
    public class TestServerFixture : TestServerFixture<Startup, ConsentDbContext>
    {
        protected override string RelativePathToHostProject => @"../../../../consent_service";
        protected override void ConfigureAppConfiguration(WebHostBuilderContext hostingContext, IConfigurationBuilder config)
        {
        }        
    }
}
