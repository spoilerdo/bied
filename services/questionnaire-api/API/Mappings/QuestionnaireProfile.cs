using AutoMapper;
using Questionnaire.Persistence.Entities;
using Questionnaire.GRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questionnaire.Mappings {
    public class QuestionnaireProfile : Profile {
        public QuestionnaireProfile() {
            CreateMap<QuestionnaireEntity, QuestionnaireResponse>();
            CreateMap<QuestionnaireCreateRequest, QuestionnaireEntity>();
            CreateMap<QuestionnaireCreateRequest, QuestionnaireEntity>();
        }
    }
}