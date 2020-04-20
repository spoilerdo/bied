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

        public override Task<getTemplatesReply> getTemplates(getTemplatesRequest request, ServerCallContext context)
        {
            this.templateLogic.getAvailableTemplates();
            return base.getTemplates(request, context);
        }

        public override string ToString()
        {
            return base.ToString();
        }
    }
}