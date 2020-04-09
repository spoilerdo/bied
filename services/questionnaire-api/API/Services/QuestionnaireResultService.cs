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
    public class QuestionnaireResultService : questionnaire_result_service.questionnaire_result_serviceBase
    {
        private readonly ILogger<QuestionnaireResultService> _logger;
        private readonly IQuestionnaireRepository _repository;
        private readonly IMapper _mapper;

        public QuestionnaireResultService(ILogger<QuestionnaireResultService> logger, IMapper mapper, IQuestionnaireRepository repository)
        {
            _logger = logger;
            _repository = repository;
            _mapper = mapper;
        }

        public async override Task<QuestionnaireResults> GetQuestionnaireResult(getQuestionnaireResultRequest request, ServerCallContext context)
        {
            //TODO: Error handeling
            var reponse = await _repository.GetQuestionnaireById(request.Id);
            return _mapper.Map<QuestionnaireResults>(reponse);
        }
    }
}