using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using Questionnaire.Persistence.Entities;

namespace Questionnaire.Persistence.Repositories
{
  public class QuestionnaireRepository : IQuestionnaireRepository
  {
    private MongoClient _dbClient;

    public QuestionnaireRepository()
    {
      _dbClient = new MongoClient(System.Configuration.ConfigurationManager.ConnectionStrings["DbConnection"].ConnectionString);
    }

    public Task<QuestionnaireEntity> GetQuestionnaireById(Guid id)
    {
      Task<QuestionnaireEntity> task = new Task<QuestionnaireEntity>(() =>
     {
       var filter = Builders<QuestionnaireEntity>.Filter.Eq("id", id.ToString());
       var document = GetCollection<QuestionnaireEntity>("Questionnaire", "Questionnaire").Find(filter).FirstOrDefault();
       return document;
     });
      return task;
    }
    public Task<IEnumerable<QuestionnaireEntity>> GetQuestionnaires()
    {
      Task<IEnumerable<QuestionnaireEntity>> task = new Task<IEnumerable<QuestionnaireEntity>>(() =>
     {
       var documents = GetCollection<QuestionnaireEntity>("Questionnaire", "Questionnaire").Find(new BsonDocument()).ToList();
       return documents;
     });
      return task;
    }
    public Task<QuestionnaireEntity> CreateQuestionnaire(QuestionnaireEntity questionnaire)
    {
      Task<QuestionnaireEntity> task = new Task<QuestionnaireEntity>(() =>
     {
       // TODO: GUID
       GetCollection<QuestionnaireEntity>("Questionnaire", "Questionnaire").InsertOne(questionnaire);
       return questionnaire;
     });
      return task;
    }
    public Task<QuestionnaireEntity> UpdateQuestionnaire(Guid id, QuestionnaireEntity questionnaire)
    {
      Task<QuestionnaireEntity> task = new Task<QuestionnaireEntity>(() =>
     {
       var filter = Builders<QuestionnaireEntity>.Filter.Eq("id", id.ToString());
       GetCollection<QuestionnaireEntity>("Questionnaire", "Questionnaire").ReplaceOne(filter, questionnaire);
       return questionnaire;
     });
      return task;
    }
    public Task DeleteQuestionnaire(Guid id)
    {
      Task task = new Task(() =>
     {
       var filter = Builders<QuestionnaireEntity>.Filter.Eq("id", id.ToString());
       GetCollection<QuestionnaireEntity>("Questionnaire", "Questionnaire").DeleteOne(filter);
     });
      return task;
    }

    private IMongoCollection<T> GetCollection<T>(String db, String col)
    {
      IMongoDatabase database = _dbClient.GetDatabase(db);
      return database.GetCollection<T>(col);
    }
  }
}
