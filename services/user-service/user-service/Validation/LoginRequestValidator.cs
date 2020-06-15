using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserGRPC;

namespace UserSvc.Validation
{
    public class LoginRequestValidator : AbstractValidator<LoginRequest>
    {
        public LoginRequestValidator()
        {
            RuleFor(req => req.Username).NotEmpty().WithMessage("Username must not be empty");
            RuleFor(req => req.Password).NotEmpty().WithMessage("Password must not be empty");
        }
    }
}
