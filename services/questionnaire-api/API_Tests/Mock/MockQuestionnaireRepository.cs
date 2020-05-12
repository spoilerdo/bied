using System;
using System.Threading;
using System.Collections.Generic;
using System.Threading.Tasks;
using Questionnaire.Persistence.Repositories;
using Questionnaire.Persistence.Entities;
using MongoDB.Bson;

namespace ApiService_tests.Mock
{
    public class MockQuestionnaireRepository : IQuestionnaireRepository
    {
        private List<QuestionnaireEntity> questionnaires = new List<QuestionnaireEntity>();

        public async Task<QuestionnaireEntity> GetQuestionnaireById(String id)
        {
            var task = new Task<QuestionnaireEntity>(() =>
            {
                return questionnaires.Find(q => q.ID == id);
            });
            task.Start();
            return await task;
        }
        public async Task<IEnumerable<QuestionnaireEntity>> GetQuestionnaires()
        {
            var task = new Task<IEnumerable<QuestionnaireEntity>>(() =>
            {
                return questionnaires;
            });
            task.Start();
            return await task;
        }
        public async Task<QuestionnaireEntity> CreateQuestionnaire(QuestionnaireEntity questionnaire)
        {
            var task = new Task<QuestionnaireEntity>(() =>
            {
                questionnaire.ID = ObjectId.GenerateNewId().ToString();
                questionnaires.Add(questionnaire);
                return questionnaire;
            });
            task.Start();
            return await task;
        }
        public async Task<QuestionnaireEntity> UpdateQuestionnaire(QuestionnaireEntity questionnaire)
        {
            var task = new Task<QuestionnaireEntity>(() =>
            {
                QuestionnaireEntity _questionnaire = questionnaires.Find(q => q.ID == questionnaire.ID);
                _questionnaire = questionnaire;
                return _questionnaire;
            });
            task.Start();
            return await task;
        }
        public async Task DeleteQuestionnaire(string id)
        {
            var task = new Task(() => {
                questionnaires.RemoveAt(questionnaires.FindIndex(q => q.ID == id));
            });
            task.Start();
            await task;
        }

    }
}
