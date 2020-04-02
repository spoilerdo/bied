using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthenticationService;
using BusinessLayer;
using Grpc.Core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PersistenceLayer;

namespace UserService
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
            string channelTarget = Configuration.GetValue<string>("AuthenticationServiceTarget");
            string connectionString = Configuration.GetConnectionString("Default");

            services.AddGrpc();

            var channel = new Channel(channelTarget, ChannelCredentials.Insecure);
            var AuthenticationClient = new Authentication.AuthenticationClient(channel);

            DbContextOptions options = new DbContextOptionsBuilder().UseSqlServer(connectionString).Options;
            var Context = new UserContext(options);
            //Make sure the sql connection is valid or else an excpetion gets thrown. 
            Context.Database.Migrate();

            services.AddSingleton(new BusinessLogic(Context, AuthenticationClient));
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
                endpoints.MapGrpcService<UserServiceImp>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }
    }
}
