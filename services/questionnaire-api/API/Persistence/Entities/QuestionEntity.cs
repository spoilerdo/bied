using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Questionnaire.GRPC;
using MongoDB.Entities.Core;

namespace Questionnaire.Persistence.Entities
{
  public class QuestionEntity : Entity
  {
    public string Label { get; set; }
    public QuestionType Type { get; set; }
    public string Description { get; set; }
    public string Data { get; set; }
    public Int32 Index { get; set; }
    public Boolean Required { get; set; }

  }

}
