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
        public DatasourceProfile()
        {
            CreateMap<Datasource, ResearchDatasource>()
        }
    }
}
