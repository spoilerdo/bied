using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using EmailService.Logic;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using Microsoft.Extensions.Options;

namespace EmailService
{
    public class MailService : Mailer.MailerBase
    {

        private readonly AppSettings _appSettings;
        private IMailLogic mailLogic;
        private readonly ILogger<MailService> _logger;
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="logger"></param>
        public MailService(ILogger<MailService> logger, IOptions<AppSettings> appSettings)
        {
            _logger = logger;
            _appSettings = appSettings.Value;
            this.mailLogic = new MailLogic(_appSettings);
        }

        /// <summary>
        ///  Sends mail requires list of emails, template, and the list of strings that need to be replaced in the template.
        /// </summary>
        /// <param name="request"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public override async Task<SendMailReply> SendMail(SendMailRequest request, ServerCallContext context)
        {
            try
            {
                await mailLogic.SendMail(request.Addresses.ToList(), request.Values.ToList(), request.Template, request.Subject);
            }
            catch (Exception e)
            {
                return new SendMailReply
                {
                    Status = "Failed",
                    Message = e.Message
                };
            }
            return new SendMailReply
            {
                Status = "Success",
                Message = "Email send"
            };
        }
        /// <summary>
        /// Overrides the tostring method
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return base.ToString();
        }
    }
}
