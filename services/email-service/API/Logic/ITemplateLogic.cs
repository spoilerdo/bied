using System.Threading.Tasks;

namespace EmailService.Logic
{
    public interface ITemplateLogic
    {
        public Task<string> GetTemplate(string name);
        public Task<string[]> getAvailableTemplates();
    }
}