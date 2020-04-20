namespace EmailService.Logic
{
    public interface ITemplateLogic
    {
         public string GetTemplate(string name);
         public string[] getAvailableTemplates();
    }
}