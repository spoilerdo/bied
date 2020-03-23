using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace ApiService
{
  public class Questionnairerepository
  {
    private readonly ILogger<Questionnairerepository> _logger;

    public Questionnairerepository(ILogger<Questionnairerepository> logger)
    {
      _logger = logger;
    }

    public Questionnaire saveQuestionnaire(Questionnaire questionnaire)
    {
      // TODO: Save or Update a questionnaire
      return null;
    }

    public void getQuestionnaire(String id)
    {
      // TODO: Get a questionnaire
    }

    public void deleteQuestionnaire(String id)
    {
      // TODO: Delete a questionnaire
    }
  }
}