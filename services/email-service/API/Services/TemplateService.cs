using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace Templating
{
    public class TemplateService : Template.TemplateBase
    {
        private readonly ILogger<TemplateService> _logger;
        public TemplateService(ILogger<TemplateService> logger)
        {
            _logger = logger;
        }

        public override Task<CreateTemplateReply> CreateTemplate(CreateTemplateRequest request, ServerCallContext context)
        {
            return base.CreateTemplate(request, context);
        }

        public override Task<getTemplatesReply> getTemplates(getTemplatesRequest request, ServerCallContext context)
        {
            return base.getTemplates(request, context);
        }

        public override string ToString()
        {
            return base.ToString();
        }
    }
}