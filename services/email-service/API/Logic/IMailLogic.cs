using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;

namespace EmailService.Logic
{
    public interface IMailLogic
    {
        /// <summary>
        /// Send an email to all the given addresses and replaces all the values of the chosen template with the given values.
        /// </summary>
        /// <param name="addresses"></param>
        /// <param name="values"></param>
        /// <param name="template"></param>
        /// <returns>Returns bool true if success or will throw error if failed</returns>
         Task<bool> SendMail(List<string> addresses, List<string> values, string template, string subject);

        /// <summary>
        /// Creates a new MailMessage
        /// </summary>
        /// <param name="addresses"></param>
        /// <param name="values"></param>
        /// <param name="template"></param>
        /// <returns>New MailMessage</returns>
        Task<MailMessage> CreateMail(List<string> addresses, List<string> values, string template, string subject);

        /// <summary>
        /// Checks if there are any addresses given and loops over addresses to check if its correct format.
        /// </summary>
        /// <param name="mails"></param>
        void CheckMailAddresses(List<string> mails);
    }
}