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

    public QuestionnaireRepository()
    {
      _db = new DB("Questionnaire", System.Configuration.ConfigurationManager.ConnectionStrings["DbConnection"].ConnectionString, 27017);
    }

    public Task<QuestionnaireEntity> GetQuestionnaireById(String id)
    {
      Task<QuestionnaireEntity> task = new Task<QuestionnaireEntity>(() =>
     {
       return _db.Find<QuestionnaireEntity>().One(id);
     });
      return task;
    }
    public Task<IEnumerable<QuestionnaireEntity>> GetQuestionnaires()
    {
      Task<IEnumerable<QuestionnaireEntity>> task = new Task<IEnumerable<QuestionnaireEntity>>(() =>
     {
       return _db.Find<QuestionnaireEntity>().Many(q => true);
     });
      return task;
    }
    public Task<QuestionnaireEntity> CreateQuestionnaire(QuestionnaireEntity questionnaire)
    {
      Task<QuestionnaireEntity> task = new Task<QuestionnaireEntity>(() =>
     {
       questionnaire.Save();
       return questionnaire;
     });
      return task;
    }
    public Task<QuestionnaireEntity> UpdateQuestionnaire(String id, QuestionnaireEntity questionnaire)
    {
      Task<QuestionnaireEntity> task = new Task<QuestionnaireEntity>(() =>
     {
       QuestionnaireEntity e = _db.Find<QuestionnaireEntity>().One(id);
       e.Name = questionnaire.Name;
       e.Description = questionnaire.Description;
       e.Questions = questionnaire.Questions;
       e.Save();
       return e;
     });
      return task;
    }
    public Task DeleteQuestionnaire(string id)
    {
      Task task = new Task(() =>
     {
       QuestionnaireEntity e = _db.Find<QuestionnaireEntity>().One(id);
       e.Delete();
     });
      return task;
    }
  }
}
