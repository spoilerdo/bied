using System;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Questionnaire.Services;
using Questionnaire.Persistence.Repositories;
using HealthCheck.Services;
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
        private IWebHostEnvironment CurrentEnvironment { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrpc();
            services.AddAutoMapper(typeof(Startup));
            services.AddScoped<IQuestionnaireRepository, QuestionnaireRepository>();

            services.AddMongoDBEntities(
                new MongoClientSettings()
                {
                    Server = new MongoServerAddress(
                        (String)Configuration.GetSection("MongoDB_host").Get(typeof(String)),
                        (int)Configuration.GetSection("MongoDB_port").Get(typeof(int))),
                    Credential = MongoCredential.CreateCredential(
                        (String)Configuration.GetSection("MongoDB_database").Get(typeof(String)),
                        (String)Configuration.GetSection("MongoDB_user").Get(typeof(String)),
                        (String)Configuration.GetSection("MongoDB_pass").Get(typeof(String)))
                }, "Questionnaire-Result"
            );
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
                endpoints.MapGrpcService<HealthCheckService>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }
    }
}
