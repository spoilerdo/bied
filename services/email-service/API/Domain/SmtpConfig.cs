namespace email_service.Domain
{
    public class SmtpConfig
    {
        public string Server { get; set; }
        public int Port { get; set; }
        public Credentials Credentials { get; set; }
    }
}