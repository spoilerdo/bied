using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserGRPC;

namespace UserSvc.Validation
{
    public class UserCreateRequestValidator : AbstractValidator<UserCreateRequest>
    {
        public UserCreateRequestValidator()
        {
            RuleFor(req => req.Username).NotEmpty().WithMessage("Username cannot be empty");
            RuleFor(req => req.Password).NotEmpty().WithMessage("Password cannot be empty");
        }

    }
}
