using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using consent_service.Common;
using consent_service.Persistence.Context;
using consent_service.Persistence.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace consent_service.Persistence.Repositories.Consents
{
    public class ConsentRepository : IConsentRepository
    {
        private readonly ConsentDbContext _context;

        public ConsentRepository(ConsentDbContext context)
        {
            _context = context;
        }

        public async Task<DataResponseObject<ConsentEntity>> CreateConsent(ConsentEntity consent)
        {
            throw new NotImplementedException();
        }

        public async Task<DataResponseObject<IEnumerable<ConsentEntity>>> GetConsents(Guid id)
        {            
            throw new NotImplementedException();
        }

        public Task<DataResponseObject<ConsentEntity>> EditConsent(ConsentEntity consent)
        {
            throw new NotImplementedException();
        }

        public Task<DataResponseObject<ConsentEntity>> DeleteConsent(Guid id)
        {
            throw new NotImplementedException();
        }


    }
}