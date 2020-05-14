using System;
using System.Threading;
using System.Collections.Generic;
using System.Threading.Tasks;
using Questionnaire.Persistence.Repositories;
using Questionnaire.Persistence.Entities;

namespace ApiService_tests.Mock
{
    public class MockQuestionnaireRepository : IQuestionnaireRepository
    {

        public async Task<QuestionnaireEntity> GetQuestionnaireById(String id)
        {
            var task = new Task<QuestionnaireEntity>(() =>
            {
                QuestionnaireEntity q = new QuestionnaireEntity();
                q.Name = "mock";
                q.Description = "Generated by MockQuestionnaireRepository";
                q.Question = new List<QuestionEntity>();
                return q;
            });
            task.Start();
            return await task;
        }
        public async Task<IEnumerable<QuestionnaireEntity>> GetQuestionnaires()
        {
            var task = new Task<IEnumerable<QuestionnaireEntity>>(() =>
            {
                return new List<QuestionnaireEntity>();
            });
            task.Start();
            return await task;
        }
        public async Task<QuestionnaireEntity> CreateQuestionnaire(QuestionnaireEntity questionnaire)
        {
            var task = new Task<QuestionnaireEntity>(() =>
            {
                return questionnaire;
            });
            task.Start();
            return await task;
        }
        public async Task<QuestionnaireEntity> UpdateQuestionnaire(QuestionnaireEntity questionnaire)
        {
            var task = new Task<QuestionnaireEntity>(() =>
            {
                return questionnaire;
            });
            task.Start();
            return await task;
        }
        public async Task DeleteQuestionnaire(string id)
        {
            var task = new Task(() => { });
            task.Start();
            await task;
        }

    }
}