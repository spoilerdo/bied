using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Questionnaire.Persistence.Entities;

namespace Questionnaire.Persistence.Repositories
{
    public interface IQuestionnaireResultRepository
    {
        /// <summary> Get Questionnaire by specified ID </summary>
        /// <param name = "id"> The ID of the questionnaire </param>
        /// <returns> data responseobject containing object or error </returns>
        Task<QuestionnaireResponseEntity> GetQuestionnaireById(String id);
    }
}