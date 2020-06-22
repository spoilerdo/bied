using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Grpc.AspNetCore.FluentValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using UserSvc.Domain;
using UserSvc.Persistence.Context;
using UserSvc.Security.Jwk;
using UserSvc.Security.Token;
using UserSvc.Services;
using UserSvc.Validation;

namespace UserSvc
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrpc(options => options.EnableMessageValidation());
            services.AddGrpcValidation();
            services.AddValidator<LoginRequestValidator>();
            services.AddSingleton<IValidatorErrorMessageHandler>(new CustomErrorMessageHandler());

            services.AddAutoMapper(typeof(Startup));
            services.AddAuthentication();
            //Register database context for identity
            services.AddDbContext<IdentityContext>(options =>
            {
                options.UseMySql(Configuration.GetConnectionString("Database"), builder =>
                {
                    builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
                });
            });
            services.AddScoped<ITokenGenerator, TokenGenerator>();
            services.AddScoped<IJwkGenerator, JwkGenerator>();
            //register identity and create db
            services.AddIdentity<ApplicationUser, IdentityRole>(options => { })
                .AddRoles<IdentityRole>()
                .AddRoleManager<RoleManager<IdentityRole>>()
                .AddDefaultTokenProviders()
                .AddSignInManager<SignInManager<ApplicationUser>>()
                .AddEntityFrameworkStores<IdentityContext>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            UpdateDatabase(app);
            CreateRoles(app);

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<UserService>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }

        private static void UpdateDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices
                .GetRequiredService<IServiceScopeFactory>()
                .CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetService<IdentityContext>())
                {
                    context.Database.Migrate();
                }
            }
        }

        private static void CreateRoles(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices
               .GetRequiredService<IServiceScopeFactory>()
               .CreateScope())
            {
                using (var roleManager = serviceScope.ServiceProvider.GetService<RoleManager<IdentityRole>>())
                {
                    if (!roleManager.RoleExistsAsync("User").Result)
                    {
                        IdentityRole role = new IdentityRole();
                        role.Name = "User";
                        IdentityResult roleResult = roleManager.CreateAsync(role).Result;
                    }

                    if (!roleManager.RoleExistsAsync("Researcher").Result)
                    {
                        IdentityRole role = new IdentityRole();
                        role.Name = "Researcher";
                        IdentityResult roleResult = roleManager.CreateAsync(role).Result;
                    }
                }
            }
        }
    }
}
