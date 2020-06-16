using AutoMapper;
using Google.Protobuf.WellKnownTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserSvc.Domain;

namespace UserSvc.Mappings
{
    public class RefreshTokenMapping : Profile
    {
        public RefreshTokenMapping()
        {
            CreateMap<RefreshToken, UserGRPC.RefreshToken>()
                .ForMember(dest => dest.Token, opt => opt.MapFrom(src => src.Token))
                .ForMember(dest => dest.Expiration, opt => opt.MapFrom(src => GetTimeStamp(src.Expiration)))
            .ReverseMap()
                .ForMember(dest => dest.Token, opt => opt.MapFrom(src => src.Token))
                .ForMember(dest => dest.Expiration, opt => opt.MapFrom(src => src.Expiration.ToDateTime()));
        }

        private Timestamp GetTimeStamp(DateTime date)
        {
            return Timestamp.FromDateTime(date);
        }

    }
}
