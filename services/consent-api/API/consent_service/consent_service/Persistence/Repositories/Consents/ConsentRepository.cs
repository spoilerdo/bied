using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using consent_service.Common;
using consent_service.Persistence.Context;
using consent_service.Persistence.Entities;
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
            _context.Consents.Add(consent);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ConsentEntity>(consent);
        }

        public async Task<DataResponseObject<IEnumerable<ConsentEntity>>> GetConsents(Guid id)
        {
            var consents = await _context.Consents.ToListAsync();
            return new DataResponseObject<IEnumerable<ConsentEntity>>(consents);
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