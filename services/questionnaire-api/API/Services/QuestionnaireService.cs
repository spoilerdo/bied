using System;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using Questionnaire.GRPC;
using Questionnaire.Persistence.Repositories;
using Questionnaire.Persistence.Entities;
using AutoMapper;

namespace Questionnaire.Services
{
  /// <summary>
  /// Responsible for handling the GRPC protobuffer service logic
  /// </summary>
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


        /// <summary>
        /// Create a questionnaire with the given parameters
        /// </summary>
        /// <param name="request">The data to create a questionnaire from</param>
        /// <param name="context">The server context</param>
        /// <returns>created Questionnaire or error indicating reason for failure</returns>
        public override async Task<QuestionnaireResponse> CreateQuestionnaire(QuestionnaireCreateRequest request, ServerCallContext context)
        {
            // TODO: Validate questions.
            if(string.IsNullOrWhiteSpace(request.Name)) {
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Name is required"));
            }

            QuestionnaireEntity response;
            try
            {
                QuestionnaireEntity entity = _mapper.Map<QuestionnaireEntity>(request);
                response = await _repository.CreateQuestionnaire(entity);
            }
            catch(AutoMapperMappingException) {
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Not all required fields are filled in"));
            }
            catch (Exception e)
            { // TODO sort errors and throw dedicated exceptions.
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }
            return _mapper.Map<QuestionnaireResponse>(response);
        }


        /// <summary>
        /// Gets a questionnaire for the given parameters
        /// </summary>
        /// <param name="request">The data to get a questionnaire with</param>
        /// <param name="context">The server context</param>
        /// <returns>found Questionnaire or error indicating reason for failure</returns>
        public override async Task<QuestionnaireResponse> GetQuestionnaire(QuestionnaireIdRequest request, ServerCallContext context)
        {
            QuestionnaireEntity response;
            try
            {
                response = await _repository.GetQuestionnaireById(request.Id);
            }
            catch (Exception e)
            { // TODO sort errors and throw dedicated exceptions.
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }
            if(response == null) {
                throw new RpcException(new Status(StatusCode.NotFound, $"Entity with id '{request.Id}' not found'"));
            }
            return _mapper.Map<QuestionnaireResponse>(response);
        }


        /// <summary>
        /// updates a questionnaire with the given parameters
        /// </summary>
        /// <param name="request">The data to Update a questionnaire with</param>
        /// <param name="context">The server context</param>
        /// <returns>updated Questionnaire or error indicating reason for failure</returns>
        public override async Task<QuestionnaireResponse> UpdateQuestionnaire(QuestionnaireEditRequest request, ServerCallContext context)
        {
            // TODO: Validate questionnaire.
            QuestionnaireEntity response;
            try
            {
                response = await _repository.UpdateQuestionnaire(_mapper.Map<QuestionnaireEntity>(request));
            }
            catch (Exception e)
            { // TODO sort errors and throw dedicated exceptions.
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }
            return _mapper.Map<QuestionnaireResponse>(response);
        }


        /// <summary>
        /// Deletes a questionnaire with the given parameters
        /// Returns an empty response even if nothing is deleted without errors
        /// </summary>
        /// <param name="request">The data to delete a questionnaire with</param>
        /// <param name="context">The server context</param>
        /// <returns>Empty response or error indicating reason for failure</returns>
        public override async Task<QuestionnaireEmptyResponse> DeleteQuestionnaire(QuestionnaireIdRequest request, ServerCallContext context)
        {
            try
            {
                await _repository.DeleteQuestionnaire(request.Id);
            }
            catch (Exception e)
            { // TODO sort errors and throw dedicated exceptions.
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }
            return new QuestionnaireEmptyResponse { };
        }
    }
}
