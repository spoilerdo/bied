using System.Net.Cache;
using FluentValidation;
using ConsentGRPC;

namespace consent_service.Validation
{
  public class UserRequestValidator : AbstractValidator<UserRequest>
  {
    public UserRequestValidator()
    {
      RuleFor(req => req.Id).NotEmpty().WithMessage("(User)Id is requered!");
    }
  }
}