
using System;
using System.Threading.Tasks;
using consent_service.Common;
using System.Collections.Generic;
using consent_service.Persistence.Entities;

namespace consent_service.Persistence.Repositories.Consents
{
    public interface IConsentRepository
    {
        Task<DataResponseObject<IEnumerable<ConsentEntity>>> GetConsents(Guid id);
        Task<DataResponseObject<ConsentEntity>> GetConsent(Guid id);
        Task<DataResponseObject<ConsentEntity>> CreateConsent(ConsentEntity consent);
        Task<DataResponseObject<ConsentEntity>> EditConsent(ConsentEntity consent);
        Task<DataResponseObject<ConsentEntity>> DeleteConsent(Guid id);
        Task<DataResponseObject<ConsentEntity>> DeleteAllConsent(Guid id);
    }
}