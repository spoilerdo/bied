using EmailService.Domain;

namespace EmailService
{
    public class AppSettings
    {
        public SmtpConfig SmtpConfig {get; set;}
        public MinioCredentials MinioCredentials {get; set;}
    }
}