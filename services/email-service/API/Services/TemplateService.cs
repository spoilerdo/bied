using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using EmailService.Logic;
using EmailService;
using Microsoft.Extensions.Options;

namespace Templating
{
    public class TemplateService : Template.TemplateBase
    {
        private readonly AppSettings _appSettings;
        private readonly ILogger<TemplateService> _logger;
        private ITemplateLogic templateLogic;
        public TemplateService(ILogger<TemplateService> logger, IOptions<AppSettings> appSettings)
        {
            _logger = logger;
            _appSettings = appSettings.Value;
            this.templateLogic = new TemplateLogic(_appSettings);
        }

        public override Task<CreateTemplateReply> CreateTemplate(CreateTemplateRequest request, ServerCallContext context)
        {
            return base.CreateTemplate(request, context);
        }

        public async override Task<getTemplatesReply> getTemplates(getTemplatesRequest request, ServerCallContext context)
        {
            try
            {
                string[] templates = new List<string>().ToArray();
                var response = await this.templateLogic.getAvailableTemplates();
                templates = response;
                var reply = new getTemplatesReply
                {
                    Status = "Success",
                };
                reply.Templates.Add(templates);

                return reply;
            }
            catch (Exception e)
            {
                return new getTemplatesReply
                {
                    Status = "Failed " + e.Message
                };
            }
        }

        public async override Task<getTemplateReply> getTemplate(getTemplateRequest request, ServerCallContext context)
        {
            try 
            {
               string templateBody =  await this.templateLogic.GetTemplate(request.TemplateName);
               return new getTemplateReply
               {
                   Status = "Success",
                   Body = templateBody

               };
            } catch (Exception e) {
                
                return new getTemplateReply
                {
                    Status = "Failed " + e.Message
                };
            }
        } 

        public override string ToString()
        {
            return base.ToString();
        }
    }
}