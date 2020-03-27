using System;
using System.Net.Mail;
using System.Collections.Generic;
using EmailService;

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

            MailMessage mail = this.CreateMail(addresses, values, template);

            using (SmtpClient client = new SmtpClient(this._appSettings.SmtpConfig.Server))
            {
                client.Port = this._appSettings.SmtpConfig.Port;
                client.UseDefaultCredentials = false;
                client.Credentials = new System.Net.NetworkCredential(this._appSettings.SmtpConfig.Credentials.Username, this._appSettings.SmtpConfig.Credentials.Password);
                client.EnableSsl = true;
                client.Send(mail);
            }

            return true;
        }

        private MailMessage CreateMail(List<string> addresses, List<string> values, string template)
        {
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(this._appSettings.SmtpConfig.Credentials.Username);
            mail.Subject = "Test mail Bied";
            mail.Body = values[0];
            foreach (string address in addresses)
            {
                mail.To.Add(address);
            }
            return mail;
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