using System;

namespace consent_service.Persistence.Entities
{
    public class ConsentDatasource
    {
        public Guid ConsentId {get; set;}
        public virtual ConsentEntity Consent {get; set;}
        public Guid DatasourceId {get; set;}
    }
}