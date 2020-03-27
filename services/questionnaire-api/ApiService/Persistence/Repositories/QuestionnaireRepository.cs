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
    public class QuestionnaireRepository : IQuestionnaireRepository
    {
        private DB _db;

        public QuestionnaireRepository(DB db)
        {
            this._db = db;
        }

        public async Task<QuestionnaireEntity> GetQuestionnaireById(String id)
        {
            return await _db.Find<QuestionnaireEntity>().OneAsync(id);
        }
        public async Task<IEnumerable<QuestionnaireEntity>> GetQuestionnaires()
        {
            return await _db.Find<QuestionnaireEntity>().ManyAsync(q => true);
        }
        public async Task<QuestionnaireEntity> CreateQuestionnaire(QuestionnaireEntity questionnaire)
        {
            await questionnaire.SaveAsync();
            return questionnaire;
        }
        public async Task<QuestionnaireEntity> UpdateQuestionnaire(QuestionnaireEntity questionnaire)
        {
            QuestionnaireEntity e = await _db.Find<QuestionnaireEntity>().OneAsync(questionnaire.ID);
            e.Name = questionnaire.Name;
            e.Description = questionnaire.Description;
            e.Questions = questionnaire.Questions;
            await e.SaveAsync();
            return e;
        }
        public async Task DeleteQuestionnaire(string id)
        {
            QuestionnaireEntity e = await _db.Find<QuestionnaireEntity>().OneAsync(id);
            await e.DeleteAsync();
        }
    }
}
