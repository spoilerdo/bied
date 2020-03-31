using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Questionnaire.Services;
using Questionnaire.Persistence.Repositories;
using MongoDB.Entities;
using MongoDB.Driver;

namespace Questionnaire
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            CurrentEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        private IWebHostEnvironment CurrentEnvironment{ get; set; } 

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrpc();
            services.AddScoped<IQuestionnaireRepository, QuestionnaireRepository>();

            Console.WriteLine(CurrentEnvironment.ApplicationName);
            Console.WriteLine(CurrentEnvironment.EnvironmentName);
            if(CurrentEnvironment.IsDevelopment()) {
                // use a memory context.
                services.AddMongoDBEntities("Questionnaire");
            } else {
                // Use the production DB.
                services.AddMongoDBEntities(
                    new MongoClientSettings() {
                        Server = new MongoServerAddress(
                            (String)Configuration.GetSection("MongoDB_host").Get(typeof(String)),
                            (int)Configuration.GetSection("MongoDB_port").Get(typeof(int))),
                        Credential = MongoCredential.CreateCredential(
                            (String)Configuration.GetSection("MongoDB_database").Get(typeof(String)), 
                            (String)Configuration.GetSection("MongoDB_user").Get(typeof(String)), 
                            (String)Configuration.GetSection("MongoDB_pass").Get(typeof(String)))
                    }, "Questionnaire"
                );
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<QuestionnaireService>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }
    }
}
