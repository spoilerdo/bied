
using AutoMapper;
using System;
using System.Threading.Tasks;
using consent_service.Persistence.Entities;
using consent_service.Persistence.Repositories.Consents;
using Grpc.Core;
using System.Collections.Generic;

namespace consent_service.Services
{
    public class Consent_Service : ConsentService.ConsentServiceBase
    {
        private readonly IConsentRepository _consentRepository;
        private readonly IMapper _mapper;
        public Consent_Service(IConsentRepository consentRepository, IMapper mapper)
        {
            _consentRepository = consentRepository;
            _mapper = mapper;
        }

        public override async Task<Consents> GetConsents(UserIdRequest request, ServerCallContext context)
        {
            
            throw new NotImplementedException();
        }

        public override async Task<Consent> CreateConsent(ConsentRequest request, ServerCallContext context)
        {           
            throw new NotImplementedException();
        }

        public override async Task<Consent> EditConsent(ConsentEditRequest request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }

        public override async Task<ConsentEmptyResponse> DeleteConsent(UserIdRequest request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }
    }
}