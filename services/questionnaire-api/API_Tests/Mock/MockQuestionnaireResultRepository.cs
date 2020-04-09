using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Questionnaire.Persistence.Entities;
using Questionnaire.Persistence.Repositories;

namespace ApiService_tests.Mock {
    public class MockQuestionnaireResultRepository : IQuestionnaireResultRepository {
        public async Task<QuestionnaireResponseEntity> GetQuestionnaireById (String id) {
            var task = new Task<QuestionnaireResponseEntity> (() => {
                QuestionnaireResponseEntity q = new QuestionnaireResponseEntity ();
                q.ID = "MockId";
                q.Name = "veryRealName";
                q.Description = "MockDescription";
                q.QuestionAnswers = new List<QuestionAnswerEntity> ();
                return q;
            });
            task.Start ();
            return await task;
        }
    }
}