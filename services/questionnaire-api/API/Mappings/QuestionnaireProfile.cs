using AutoMapper;
using Questionnaire.Persistence.Entities;
using Questionnaire.GRPC;
using MongoDB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Google.Protobuf.Collections;

namespace Questionnaire.Mappings
{
    public class QuestionnaireProfile : Profile
    {
        public QuestionnaireProfile()
        {
            CreateMap<QuestionnaireEntity, QuestionnaireResponse>()
                .ForMember(dest => dest.Question, opt => opt.MapFrom(src => src.Questions));
            CreateMap<QuestionnaireCreateRequest, QuestionnaireEntity>()
                .ForMember(dest => dest.Questions, opt => opt.MapFrom(src => src.Question));
            CreateMap<QuestionnaireEditRequest, QuestionnaireEntity>()
                .ForMember(dest => dest.Questions, opt => opt.MapFrom(src => src.Question));
        }
    }
}