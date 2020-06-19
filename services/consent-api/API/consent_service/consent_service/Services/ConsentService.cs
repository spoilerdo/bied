
using AutoMapper;
using System;
using System.Threading.Tasks;
using consent_service.Persistence.Entities;
using consent_service.Persistence.Repositories.Consents;
using Grpc.Core;
using System.Collections.Generic;
using ConsentGRPC;

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
        /// Delete all consents for a given user
        /// </summary>
        /// <param name="request">The userId on which to delete all consents</param>
        /// <param name="context">The server context</param>
        /// <returns>A response indicating success/failure</returns>
        public override async Task<Consent> GetConsent(ConsentIdRequest request, ServerCallContext context)
        {
            var consent = await _consentRepository.GetConsent(new Guid(request.ConsentId));
            if (!consent.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, consent.Message));
            }
            return _mapper.Map<Consent>(consent.Data);
        }

        /// <summary>
        /// Create a consent with the given parameters
        /// </summary>
        /// <param name="request">The data to create a consent with</param>
        /// <param name="context">The server context</param>
        /// <returns>The created consent, or an grpc error indicating the reason for failure</returns>
        public override async Task<Consent> CreateConsent(ConsentRequest request, ServerCallContext context)
        {
            var createdConsent = await _consentRepository.CreateConsent(_mapper.Map<ConsentEntity>(request));

            if (!createdConsent.Success)
            {
                throw new RpcException(new Status(StatusCode.InvalidArgument, createdConsent.Message));
            }
            return _mapper.Map<Consent>(createdConsent.Data);

        }

        /// <summary>
        /// Edit a consent with the given parameters
        /// </summary>
        /// <param name="request">The parameters to update the consent with</param>
        /// <param name="context">The server context</param>
        /// <returns>The edited consent, or an grpc error indicating the reason for failure</returns>
        public override async Task<Consent> EditConsent(ConsentEditRequest request, ServerCallContext context)
        {
            var editedConsent = await _consentRepository.EditConsent(_mapper.Map<ConsentEntity>(request));
            if (!editedConsent.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, editedConsent.Message));
            }
            return _mapper.Map<Consent>(editedConsent.Data);
        }

        /// <summary>
        /// Delete a consent with the given parameters
        /// </summary>
        /// <param name="request">The parameters on which to delete a consent</param>
        /// <param name="context">The server context</param>
        /// <returns>A response indicating success/failure</returns>
        public override async Task<ConsentEmptyResponse> DeleteConsent(ConsentIdRequest request, ServerCallContext context)
        {
            var deletedConsent = await _consentRepository.DeleteConsent(new Guid(request.ConsentId));
            if (!deletedConsent.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, deletedConsent.Message));
            }
            return new ConsentEmptyResponse();
        }

        /// <summary>
        /// Delete all consents for a given user
        /// </summary>
        /// <param name="request">The userId on which to delete all consents</param>
        /// <param name="context">The server context</param>
        /// <returns>A response indicating success/failure</returns>
        public override async Task<ConsentEmptyResponse> DeleteAllConsent(UserIdRequest request, ServerCallContext context)
        {
            var deletedConsents = await _consentRepository.DeleteAllConsent(new Guid(request.Id));
            if (!deletedConsents.Success)
            {
                throw new RpcException(new Status(StatusCode.NotFound, deletedConsents.Message));
            }
            return new ConsentEmptyResponse();
        }
    }
}