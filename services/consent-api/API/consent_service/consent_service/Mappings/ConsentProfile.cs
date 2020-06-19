using AutoMapper;
using consent_service.Persistence.Entities;
using ConsentGRPC;
using System;

namespace consent_service.Mapping
{
  public class ConsentProfile : Profile
  {
    public ConsentProfile()
    {
      CreateMap<ConsentEntity, Consent>()
          .ForMember(dest => dest.Uts, opt => opt.MapFrom(src => DateTimeToUnixTime(src.Uts)));
      CreateMap<ConsentRequest, ConsentEntity>()
          .ForMember(dest => dest.Uts, opt => opt.MapFrom(src => UnixTimeToDateTime(src.Uts)));
      CreateMap<ConsentCreateRequest, ConsentEntity>()
          .ForMember(dest => dest.Uts, opt => opt.MapFrom(src => UnixTimeToDateTime(src.Uts)));
      CreateMap<ConsentEditRequest, ConsentEntity>()
          .ForMember(dest => dest.Uts, opt => opt.MapFrom(src => UnixTimeToDateTime(src.Uts)));
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