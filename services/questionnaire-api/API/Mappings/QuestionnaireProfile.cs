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
            CreateMap<QuestionnaireEntity, QuestionnaireResponse>()
                .ForMember(dest => dest.Question, opt => opt.MapFrom(src => src.Question));
            CreateMap<QuestionnaireCreateRequest, QuestionnaireEntity>()
                .ForMember(dest => dest.Question, opt => opt.MapFrom(src => src.Question));
            CreateMap<QuestionnaireEditRequest, QuestionnaireEntity>()
                .ForMember(dest => dest.Question, opt => opt.MapFrom(src => src.Question));

        }
    }
}