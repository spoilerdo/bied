using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace EmailService
{
    public class MailService : Mailer.MailerBase
    {
        private readonly ILogger<MailService> _logger;
        public MailService(ILogger<MailService> logger)
        {
            _logger = logger;
        }

        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HelloReply
            {
                Message = "Hello " + request.Name
            });
        }

        public override Task<SendMailReply> SendMail(SendMailRequest request, ServerCallContext context)
        {
            return Task.FromResult(new SendMailReply { 
                Status = "Success",
                Message = "Email send"
            });
        }

        public override string ToString()
        {
            return base.ToString();
        }
    }
}
