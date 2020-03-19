using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Persistence.Entities
{
    public class ResearchDatasource
    {
        public Guid ResearchId { get; set; }
        public virtual ResearchEntity Research { get; set; }
        public Guid DatasourceId { get; set; }
    }
}
