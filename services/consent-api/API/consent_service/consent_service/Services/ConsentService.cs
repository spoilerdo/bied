
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
            var consents = await _consentRepository.GetConsents(new Guid(request.Id));
            if (!consents.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, "No consents where found!"));
            }
            return new Consents
            {
                Consents_ = { _mapper.Map<IEnumerable<Consent>>(consents.Data) }
            };
        }

        public override async Task<Consent> CreateConsent(ConsentRequest request, ServerCallContext context)
        {
            // var createdConsent = await _consentRepository.CreateConsent(_mapper.Map<ConsentEntity>(request));

            // if(!createdConsent.Success)
            // {
            //     throw new RpcException(new Status(StatusCode.Internal, "Could not create the consent!"));
            // }
            // return _mapper.Map<Consent>(createdConsent.Data);
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