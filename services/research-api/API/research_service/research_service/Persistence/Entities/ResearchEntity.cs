using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Persistence.Entities
{
    public class ResearchEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool Active { get; set; }
        public Guid OwnerId { get; set; }
        
        public virtual ICollection<ResearchDatasource> ResearchDataSources { get; set; }
        public virtual ICollection<ResearchEditor> ResearchEditors { get; set; }
    }

}
