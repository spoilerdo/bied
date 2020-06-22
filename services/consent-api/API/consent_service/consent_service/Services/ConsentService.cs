
using AutoMapper;
using System;
using System.Threading.Tasks;
using consent_service.Persistence.Entities;
using consent_service.Persistence.Repositories.Consents;
using Grpc.Core;
using System.Collections.Generic;
using ConsentGRPC;
using Microsoft.Extensions.Logging;

namespace consent_service.Services
{
  /// <summary>
  /// Responsible for handling GRPC protobuffer service logic
  /// </summary>
  public class ConsentService : Consent_Service.Consent_ServiceBase
  {
    private readonly IConsentRepository _consentRepository;
    private readonly IMapper _mapper;

    private readonly ILogger<ConsentService> _logger;
    public ConsentService(IConsentRepository consentRepository, IMapper mapper, ILogger<ConsentService> logger)
    {
      _consentRepository = consentRepository;
      _mapper = mapper;
      _logger = logger;
    }

    public override async Task<Consents> GetUserConsents(UserRequest request, ServerCallContext context)
    {
      _logger.LogInformation("Get User Consents");
      _logger.LogInformation(request.Id);
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

    public override async Task<Consent> GetConsent(ConsentRequest request, ServerCallContext context)
    {
      _logger.LogInformation("Get Consent");
      _logger.LogInformation(request.Id);

      var consent = await _consentRepository.GetConsent(new Guid(request.Id));

      if (!consent.Success)
      {
        throw new RpcException(new Status(StatusCode.NotFound, consent.Message));
      }

      return _mapper.Map<Consent>(consent.Data);
    }

    public override async Task<Consent> CreateConsent(ConsentCreateRequest request, ServerCallContext context)
    {
      _logger.LogInformation("Create Consent");
      var createdConsent = await _consentRepository.CreateConsent(_mapper.Map<ConsentEntity>(request));

      if (!createdConsent.Success)
      {
        throw new RpcException(new Status(StatusCode.InvalidArgument, createdConsent.Message));
      }

      return _mapper.Map<Consent>(createdConsent.Data);
    }

    public override async Task<Consent> EditConsent(ConsentEditRequest request, ServerCallContext context)
    {
      _logger.LogInformation("Edit Consent");
      var editedConsent = await _consentRepository.EditConsent(_mapper.Map<ConsentEntity>(request));

      if (!editedConsent.Success)
      {
        throw new RpcException(new Status(StatusCode.NotFound, editedConsent.Message));
      }

      return _mapper.Map<Consent>(editedConsent.Data);
    }

    public override async Task<Empty> DeleteConsent(ConsentRequest request, ServerCallContext context)
    {
      _logger.LogInformation("Delete Consent");
      var deletedConsent = await _consentRepository.DeleteConsent(new Guid(request.Id));

      if (!deletedConsent.Success)
      {
        throw new RpcException(new Status(StatusCode.NotFound, deletedConsent.Message));
      }

      return new Empty();
    }

    public override async Task<Empty> DeleteAllUserConsent(UserRequest request, ServerCallContext context)
    {
      _logger.LogInformation("Delete All User Consent");
      var deletedConsents = await _consentRepository.DeleteAllConsent(new Guid(request.Id));

      if (!deletedConsents.Success)
      {
        throw new RpcException(new Status(StatusCode.NotFound, deletedConsents.Message));
      }

      return new Empty();
    }
  }
}