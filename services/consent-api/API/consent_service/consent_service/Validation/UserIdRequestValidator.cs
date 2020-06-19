using System.Net.Cache;
using FluentValidation;
using ConsentGRPC;

namespace consent_service.Validation
{
    public class UserIdRequestValidator : AbstractValidator<UserIdRequest>
    {
        public UserIdRequestValidator()
        {
            RuleFor(req => req.Id).NotEmpty().WithMessage("(User)Id is requered!");
        }
    }
}