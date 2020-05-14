using AutoMapper;
using Questionnaire.Persistence.Entities;
using Questionnaire.GRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questionnaire.Mappings {
    public class QuestionProfile : Profile {
        public QuestionProfile() {
            CreateMap<QuestionEntity, QuestionResponse>();
            CreateMap<QuestionRequest, QuestionEntity>();
        }
    }
}