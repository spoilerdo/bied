using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Entities;
using Questionnaire.Persistence.Entities;

namespace Questionnaire.Persistence.Repositories
{
    public class QuestionnaireResultRepository : IQuestionnaireResultRepository
    {
        private DB _db;

        public QuestionnaireResultRepository(DB db)
        {
            this._db = DB.GetInstance("Questionnaire-Result");
        }

        public async Task<QuestionnaireResponseEntity> GetQuestionnaireById(String id)
        {
            return await _db.Find<QuestionnaireResponseEntity>().OneAsync(id);
        }
    }
}
