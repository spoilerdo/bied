using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Entities.Core;

namespace Questionnaire.Persistence.Entities
{
    public class QuestionnaireEntity : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<QuestionEntity> Question { get; set; }
    }

}
