using AutoMapper;
using research_service.Persistence.Entities;
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
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => DateTimeToUnixTime(src.EndDate)));
            CreateMap<ResearchCreateRequest, ResearchEntity>()
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.StartDate)))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.EndDate)));
            CreateMap<ResearchEditRequest, ResearchEntity>()
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.StartDate)))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => UnixTimeToDateTime(src.EndDate)));

        }

        private DateTime UnixTimeToDateTime(long unixTime)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            dtDateTime = dtDateTime.AddMilliseconds(unixTime).ToLocalTime();
            return dtDateTime;
        }

        private long DateTimeToUnixTime(DateTime dateTime)
        {
            long unixTime = ((DateTimeOffset)dateTime).ToUnixTimeSeconds();
            return unixTime;
        }
    }
}
