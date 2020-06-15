using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserGRPC;
using UserSvc.Domain;

namespace UserSvc.Mappings
{
    public class UserMapping : Profile
    {
        public UserMapping()
        {
            CreateMap<ApplicationUser, UserModel>()
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.UserName))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Firstname, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.Lastname, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id));
        }
    }
}
