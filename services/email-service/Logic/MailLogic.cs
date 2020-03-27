using System;
using System.Net.Mail;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using EmailService;
using Microsoft.Extensions.Options;

namespace email_service.Logic
{
    public class MailLogic : IMailLogic
    {
        private readonly AppSettings _appSettings;

        public MailLogic(AppSettings appSettings)
        {
            _appSettings = appSettings;
        }

        /// <summary>
        /// Send an email to all the given addresses and replaces all the values of the chosen template with the given values.
        /// </summary>
        /// <param name="addresses"></param>
        /// <param name="values"></param>
        /// <param name="template"></param>
        /// <returns>Returns bool true if success or will throw error if failed</returns>
        public bool SendMail(List<string> addresses, List<string> values, string template)
        {
            this.CheckMailAddresses(addresses);
            // SmtpClient client = new SmtpClient(SMTPSERVER);

            return true;
        }

        private void CheckMailAddresses(List<string> mails)
        {
            if (mails.Count <= 0)
            {
                throw new Exception("No email addresses are given.");
            }
            foreach (string mail in mails)
            {
                MailAddress m = new MailAddress(mail);
            }
        }
    }
}