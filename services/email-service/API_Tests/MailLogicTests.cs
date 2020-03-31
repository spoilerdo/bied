using System.Reflection;
using System.Net.Mail;
using System.Collections.Generic;
using System;
using Xunit;
using EmailService.Logic;
using EmailService;
using EmailService.Domain;

namespace ApiTests
{
    public class MailLogicTests
    {
        [Fact]
        public void TestCheckMailWrongAddressSingle()
        {
            IMailLogic mailLogic = new MailLogic(null);
            List<string> list = new List<string>()
            {
                "test"
            };
            Assert.Throws<System.FormatException>(() => mailLogic.CheckMailAddresses(list));
        }
        [Fact]
        public void TestCheckMailWrongAddressMultiple()
        {
            IMailLogic mailLogic = new MailLogic(null);
            List<string> list = new List<string>()
            {
                "test",
                "mailmail.nl"
            };

            Assert.Throws<System.FormatException>(() => mailLogic.CheckMailAddresses(list));
        }
        [Fact]
        public void TestCheckMailWrongAddressOneFailInList()
        {
            IMailLogic mailLogic = new MailLogic(null);
            List<string> list = new List<string>()
            {
                "test",
                "mailmail.nl",
                "asd23@asda.nl"
            };
            Assert.Throws<System.FormatException>(() => mailLogic.CheckMailAddresses(list));
        }
        [Fact]
        public void TestCheckMailEmptyList()
        {
            IMailLogic mailLogic = new MailLogic(null);
            List<string> list = new List<string>();

            Assert.Throws<System.Exception>(() => mailLogic.CheckMailAddresses(list));
        }

        [Fact]
        public void TestCheckMailCorrectFormatSingle()
        {
            IMailLogic mailLogic = new MailLogic(null);
            List<string> list = new List<string>()
            {
                "test@test.nl"
            };

            try
            {
                mailLogic.CheckMailAddresses(list);
            }
            catch
            {
                Assert.True(false);
            }
        }

        [Fact]
        public void TestCheckMailCorrectFormatMultiple()
        {
            IMailLogic mailLogic = new MailLogic(null);
            List<string> list = new List<string>()
            {
                "test@test.nl",
                "another@test.nl"
            };

            try
            {
                mailLogic.CheckMailAddresses(list);
            }
            catch
            {
                Assert.True(false);
            }
        }

        [Fact]
        public void TestCreateMail() 
        {
            AppSettings settings = new AppSettings();
            settings.SmtpConfig = new SmtpConfig();
            settings.SmtpConfig.Credentials = new Credentials();
            settings.SmtpConfig.Credentials.Username = "test@test.nl";
            IMailLogic mailLogic = new MailLogic(settings);
            List<string> list = new List<string>()
            {
                "test@test.nl",
                "another@test.nl"
            };
            List<string> values = new List<string>()
            {
                "hi",
                "user"
            };
            MailMessage mail = mailLogic.CreateMail(list, values, "test");
            Assert.Equal(mail.Subject, "Test mail Bied");
            Console.WriteLine(mail.To);
            Assert.Equal(mail.Body, "hi user ");
        }

        [Fact]
        public void TestCreateMailWrongUsername() 
        {
            AppSettings settings = new AppSettings();
            settings.SmtpConfig = new SmtpConfig();
            settings.SmtpConfig.Credentials = new Credentials();
            settings.SmtpConfig.Credentials.Username = "test";
            IMailLogic mailLogic = new MailLogic(settings);
            List<string> list = new List<string>()
            {
                "test@test.nl",
                "another@test.nl"
            };
            List<string> values = new List<string>()
            {
                "hi",
                "user"
            };
            Assert.Throws<System.FormatException>(() => mailLogic.CreateMail(list, values, "test"));
        }
    }
}
