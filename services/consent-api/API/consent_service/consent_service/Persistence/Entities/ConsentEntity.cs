using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace consent_service.Persistence.Entities
{
    public class ConsentEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id {get; set;}
        public string userId {get; set;}
        public bool Consent {get; set;}
        public DateTime Uts {get; set;}
        public virtual ConsentDatasource Datasource {get; set;}
    }
}