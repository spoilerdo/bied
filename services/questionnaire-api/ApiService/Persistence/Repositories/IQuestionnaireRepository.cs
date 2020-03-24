using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questionnaire.Persistence.Entities;
using Questionnaire.Common;

namespace Questionnaire.Persistence.Repositories
{
  public interface IQuestionnaireRepository
  {
    Task<DataResponseObject<QuestionnaireEntity>> GetQuestionnaireById(Guid id);
    Task<DataResponseObject<IEnumerable<QuestionnaireEntity>>> GetQuestionnaires();
    Task<DataResponseObject<QuestionnaireEntity>> CreateQuestionnaire(QuestionnaireEntity questionnaire);
    Task<DataResponseObject<QuestionnaireEntity>> UpdateQuestionnaire(Guid id, QuestionnaireEntity questionnaire);
    Task<DataResponseObject<QuestionnaireEntity>> DeleteQuestionnaire(Guid id);
  }
}
