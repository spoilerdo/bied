using System.Net.Mail;
using System.Collections.Generic;

namespace email_service.Logic
{
    public class MailLogic : IMailLogic
    {
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
            
            return true;
        }

        private void CheckMailAddresses(List<string> mails) {
                foreach(string mail in mails) {
                    MailAddress m = new MailAddress(mail);
                }
        }
    }
}