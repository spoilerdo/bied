using AutoMapper;
using research_service.Persistence.Entities;
using ResearchGRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Mapping
{
    public class ResearchProfile : Profile
    {
        public ResearchProfile()
        {
            CreateMap<ResearchEntity, Research>()
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => DateTimeToUnixTime(src.StartDate)))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => DateTimeToUnixTime(src.EndDate)))
                .ForMember(dest => dest.Datasources, opt => opt.MapFrom(src => src.ResearchDataSources));
            CreateMap<ResearchCreateRequest, ResearchEntity>()
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.StartDate)))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.EndDate)));
            CreateMap<ResearchEditRequest, ResearchEntity>()
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.StartDate)))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.EndDate)));

        }

        private DateTime UnixTimeToDateTime(long unixTime)
        {
            var DateTime = DateTimeOffset.FromUnixTimeSeconds(unixTime).DateTime.ToLocalTime();
            return DateTime;
        }

        private long DateTimeToUnixTime(DateTime dateTime)
        {
            long unixTime = ((DateTimeOffset)dateTime).ToUnixTimeSeconds();
            return unixTime;
        }
    }
}
