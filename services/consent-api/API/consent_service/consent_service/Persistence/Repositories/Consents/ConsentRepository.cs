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
            _context.Consents.Add(consent);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ConsentEntity>(consent);
        }


        public async Task<DataResponseObject<IEnumerable<ConsentEntity>>> GetConsents(Guid id)
        {
            var consents = await _context.Consents.Where(b => b.userId == id.ToString()).ToListAsync();
            return new DataResponseObject<IEnumerable<ConsentEntity>>(consents);
        }

        public async Task<DataResponseObject<ConsentEntity>> EditConsent(ConsentEntity consent)
        {
            ConsentEntity foundConsent = await _context.Consents.FindAsync(consent.Id);
            if (foundConsent == null)
            {
                return new DataResponseObject<ConsentEntity>("Consent could not be found");
            }
            _context.Entry(foundConsent).CurrentValues.SetValues(consent);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ConsentEntity>(foundConsent);
        }

        public async Task<DataResponseObject<ConsentEntity>> DeleteConsent(Guid id)
        {
            ConsentEntity foundConsent = await _context.Consents.FindAsync(id);
            if(foundConsent == null)
            {
                return new DataResponseObject<ConsentEntity>("Consent could not be found");
            }
            _context.Consents.Remove(foundConsent);
            await _context.SaveChangesAsync();
            return new DataResponseObject<ConsentEntity>(true);
        }


    }
}