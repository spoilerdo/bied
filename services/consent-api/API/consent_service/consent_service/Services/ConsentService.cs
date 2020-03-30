
using AutoMapper;
using System;
using System.Threading.Tasks;
using consent_service.Persistence.Entities;
using consent_service.Persistence.Repositories.Consents;
using Grpc.Core;
using System.Collections.Generic;

namespace consent_service.Services
{
    /// <summary>
    /// Responsible for handling GRPC protobuffer service logic
    /// </summary>
    public class ConsentService : Consent_Service.Consent_ServiceBase
    {
        private readonly IConsentRepository _consentRepository;
        private readonly IMapper _mapper;
        public ConsentService(IConsentRepository consentRepository, IMapper mapper)
        {
            _consentRepository = consentRepository;
            _mapper = mapper;
        }

        /// <summary>
        /// Get all consent for a certain user
        /// </summary>
        /// <param name="request">The parameter containing the userId to search the consents for</param>
        /// <param name="context">The server context</param>
        /// <returns>The found consents for the specific user, or an grpc error indicating the reason for failure</returns>
        public override async Task<Consents> GetConsents(UserIdRequest request, ServerCallContext context)
        {
            Console.WriteLine("TESTING --------------------------");
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

        /// <summary>
        /// Create a consent with the given parameters
        /// </summary>
        /// <param name="request">The data to create a consent with</param>
        /// <param name="context">The server context</param>
        /// <returns>The created consent, or an grpc error indicating the reason for failure</returns>
        public override async Task<Consent> CreateConsent(ConsentRequest request, ServerCallContext context)
        {            
            var consent = _mapper.Map<ConsentEntity>(request);            
            Console.WriteLine(consent.ToString());
            var createdConsent = await _consentRepository.CreateConsent(_mapper.Map<ConsentEntity>(request));

            if (!createdConsent.Success)
            {
                throw new RpcException(new Status(StatusCode.Internal, "Could not create the consent!"));
            }
            return _mapper.Map<Consent>(createdConsent.Data);

        }

        /// <summary>
        /// Edit a consent with the given parameters
        /// </summary>
        /// <param name="request">The parameters to update the consent with</param>
        /// <param name="context">The server context</param>
        /// <returns>The edited consent, or an grpc error indicating the reason for failure</returns>
        public override Task<Consent> EditConsent(ConsentEditRequest request, ServerCallContext context)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Delete a consent with the given parameters
        /// </summary>
        /// <param name="request">The parameters on which to delete a consent</param>
        /// <param name="context">The server context</param>
        /// <returns>A response indicating success/failure</returns>
        public override Task<ConsentEmptyResponse> DeleteConsent(DeleteConsentRequest request, ServerCallContext context) 
        {
            throw new NotImplementedException();
        }
    }
}