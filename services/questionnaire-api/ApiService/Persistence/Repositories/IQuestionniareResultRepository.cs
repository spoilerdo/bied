using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questionnaire.Persistence.Entities;

namespace Questionnaire.Persistence.Repositories
{
    public interface IQuestionnaireResultRepository
    {
        Task<QuestionnaireEntity> GetQuestionnaireById(String id);
    }
}