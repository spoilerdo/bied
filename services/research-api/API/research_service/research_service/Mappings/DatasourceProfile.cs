using AutoMapper;
using DatasourceGRPC;
using research_service.Persistence.Entities;
using ResearchGRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Mappings
{
    public class DatasourceProfile : Profile
    {
        //TODO: UPDATEN MET NIEUWE NUGET NAAR DATASOURCEIDREQUEST
        public DatasourceProfile()
        {
          /*  CreateMap<Datasource, ResearchDatasource>()
                .ForMember(dest => dest.DatasourceId, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.ResearchId, opt => opt.MapFrom(src => src.)) */
        }
    }
}
