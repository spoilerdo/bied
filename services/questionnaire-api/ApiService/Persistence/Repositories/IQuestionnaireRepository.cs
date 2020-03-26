using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questionnaire.Persistence.Entities;

namespace Questionnaire.Persistence.Repositories
{
  public interface IQuestionnaireRepository
  {
    Task<QuestionnaireEntity> GetQuestionnaireById(Guid id);
    Task<IEnumerable<QuestionnaireEntity>> GetQuestionnaires();
    Task<QuestionnaireEntity> CreateQuestionnaire(QuestionnaireEntity questionnaire);
    Task<QuestionnaireEntity> UpdateQuestionnaire(Guid id, QuestionnaireEntity questionnaire);
    Task DeleteQuestionnaire(Guid id);
  }
}
