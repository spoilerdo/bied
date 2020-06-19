using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserGRPC;

namespace UserSvc.Mappings
{
    public class JwkMapping : Profile
    {
        public JwkMapping()
        {
            CreateMap<JsonWebKey, Jwk>()
                .ForMember(dest => dest.Alg, opt => opt.MapFrom(src => src.Alg))
                .ForMember(dest => dest.Kty, opt => opt.MapFrom(src => src.Kty))
                .ForMember(dest => dest.E, opt => opt.MapFrom(src => src.E))
                .ForMember(dest => dest.N, opt => opt.MapFrom(src => src.N))
                .ForMember(dest => dest.Use, opt => opt.MapFrom(src => src.Use));
        }
    }
}
