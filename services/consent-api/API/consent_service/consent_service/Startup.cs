﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// using consent_service.Mapping;
using consent_service.Persistence.Context;
using consent_service.Persistence.Repositories.Consents;
using consent_service.Services;
using Grpc.AspNetCore.FluentValidation;
using consent_service.Validation;

namespace consent_service
{
  public class Startup
  {
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddGrpc();

      services.AddGrpc(options => options.EnableMessageValidation());
      services.AddValidator<ConsentRequestValidator>();
      services.AddValidator<ConsentEditRequestValidator>();
      services.AddValidator<ConsentEditRequestValidator>();
      services.AddValidator<UserRequestValidator>();
      services.AddGrpcValidation();
      services.AddSingleton<IValidatorErrorMessageHandler>(new CustomErrorMessageHandler());

      services.AddAutoMapper(typeof(Startup));
      services.AddDbContext<ConsentDbContext>(options =>
      {
        options.UseMySql(Configuration.GetConnectionString("DbConnection"), builder =>
              {
                builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
              });
      });
      services.AddScoped<IConsentRepository, ConsentRepository>();
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
        endpoints.MapGrpcService<ConsentService>();

        endpoints.MapGet("/", async context =>
              {
                await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
              });
      });
    }
  }
}
