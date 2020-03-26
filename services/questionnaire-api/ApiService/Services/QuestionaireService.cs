using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using Questionnaire.GRPC;

namespace Questionnaire.Services
{
  public class QuestionnaireService : Questionnaire_Service.Questionnaire_ServiceBase
  {
    private readonly ILogger<QuestionnaireService> _logger;

    public QuestionnaireService(ILogger<QuestionnaireService> logger)
    {
      _logger = logger;
    }

    public override Task<QuestionnaireResponse> CreateQuestionnaire(QuestionnaireCreateRequest request, ServerCallContext context)
    {
      // TODO: Validate questionnaire.
      // TODO: Save validated questionnaire.
      // TODO: Return the saved questionnaire
      return Task.FromResult(new QuestionnaireResponse
      {
        Id = "id",
        Name = "name",
        Description = "description"
      });
    }

    public override Task<QuestionnaireResponse> GetQuestionnaire(QuestionnaireIdRequest request, ServerCallContext context)
    {
      // TODO: find questionnaire by id.
      // TODO: Return the found questionnaire
      return Task.FromResult(new QuestionnaireResponse
      {
        Id = "id",
        Name = "name",
        Description = "description"
      });
    }

    public override Task<QuestionnaireResponse> UpdateQuestionnaire(QuestionnaireEditRequest request, ServerCallContext context)
    {
      // TODO: Validate questionnaire.
      // TODO: Update validated questionnaire.
      // TODO: Return the updated questionnaire
      return Task.FromResult(new QuestionnaireResponse
      {
        Id = "id",
        Name = "name",
        Description = "description"
      });
    }

    public override Task<QuestionnaireEmptyResponse> DeleteQuestionnaire(QuestionnaireIdRequest request, ServerCallContext context)
    {
      // TODO: Delete questionnaire.
      return Task.FromResult(new QuestionnaireEmptyResponse { });
    }
  }
}
