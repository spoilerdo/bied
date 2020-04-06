using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using Questionnaire.GRPC;
using Questionnaire.Persistence.Repositories;
using Questionnaire.Persistence.Entities;
using AutoMapper;

namespace Questionnaire.Services
{
  public class QuestionnaireService : Questionnaire_Service.Questionnaire_ServiceBase
  {
    private readonly ILogger<QuestionnaireService> _logger;
    private readonly IQuestionnaireRepository _repository;
    private readonly IMapper _mapper;

    public QuestionnaireService(ILogger<QuestionnaireService> logger, IMapper mapper, IQuestionnaireRepository repository)
    {
      _logger = logger;
      _repository = repository;
      _mapper = mapper;
    }

    public override async Task<QuestionnaireResponse> CreateQuestionnaire(QuestionnaireCreateRequest request, ServerCallContext context)
    {
      // TODO: Validate questionnaire.
      QuestionnaireEntity response;
      try {
        response = await _repository.CreateQuestionnaire(_mapper.Map<QuestionnaireEntity>(request));
      } catch(Exception e) { // TODO sort errors and throw dedicated exceptions.
        throw new RpcException(new Status(StatusCode.Internal, e.Message));
      }
      return _mapper.Map<QuestionnaireResponse>(response);
    }

    public override async Task<QuestionnaireResponse> GetQuestionnaire(QuestionnaireIdRequest request, ServerCallContext context)
    {
      QuestionnaireEntity response;
      try {
        response = await _repository.GetQuestionnaireById(request.Id);
      } catch(Exception e) { // TODO sort errors and throw dedicated exceptions.
        throw new RpcException(new Status(StatusCode.Internal, e.Message));
      }
      return _mapper.Map<QuestionnaireResponse>(response);
    }

    public override async Task<QuestionnaireResponse> UpdateQuestionnaire(QuestionnaireEditRequest request, ServerCallContext context)
    {
      // TODO: Validate questionnaire.
      QuestionnaireEntity response;
      try {
        response = await _repository.UpdateQuestionnaire(_mapper.Map<QuestionnaireEntity>(request));
      } catch(Exception e) { // TODO sort errors and throw dedicated exceptions.
        throw new RpcException(new Status(StatusCode.Internal, e.Message));
      }
      return _mapper.Map<QuestionnaireResponse>(response);
    }

    public override async Task<QuestionnaireEmptyResponse> DeleteQuestionnaire(QuestionnaireIdRequest request, ServerCallContext context)
    {
      try {
        await _repository.DeleteQuestionnaire(request.Id);
      } catch(Exception e) { // TODO sort errors and throw dedicated exceptions.
        throw new RpcException(new Status(StatusCode.Internal, e.Message));
      }
      return new QuestionnaireEmptyResponse { };
    }
  }
}
