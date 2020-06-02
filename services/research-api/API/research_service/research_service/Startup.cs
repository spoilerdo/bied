using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Grpc.AspNetCore.FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using research_service.Mapping;
using research_service.Persistence.Context;
using research_service.Persistence.Repositories.Researches;
using research_service.Services;
using research_service.Validation;

namespace research_service
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
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("4o-648t0b-Sj0IS6EfKnhLJOthYbJJf8s26B4GCHq2PD_DmoCKX6vj7pGrQ-X7FkmvDiadjqQyneygSu8mrMZ1vrh1TtFTpU9K0KvRvluvvjt3VTVTOgDjsifhKoVsU61FLj67gbRUql6kEgi9LeG5Extr1tlhxqRro7CeoU48c")),
                    ValidateIssuer = true,
                    ValidIssuer = Configuration.GetValue<string>("jwtAuthentication:Issuer"),
                    ValidateAudience = true,
                    ValidAudience = Configuration.GetValue<string>("jwtAuthentication:Audience")
                };
            });

            services.AddAuthorization(); 

            services.AddGrpc(options => options.EnableMessageValidation());
            services.AddValidator<ResearchIdRequestValidator>();
            services.AddValidator<ResearchCreateRequestValidator>();
            services.AddValidator<ResearchEditRequestValidator>();
            services.AddGrpcValidation();
            services.AddSingleton<IValidatorErrorMessageHandler>(new CustomErrorMessageHandler());

            services.AddAutoMapper(typeof(Startup));
            services.AddDbContext<ResearchDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DbConnection"));
            });
            services.AddScoped<IResearchRepository, ResearchRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<ResearchService>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }
    }
}
