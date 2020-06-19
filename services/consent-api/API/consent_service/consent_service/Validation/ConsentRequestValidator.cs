using System.Net.Cache;
using FluentValidation;
using ConsentGRPC;

namespace consent_service.Validation
{
  public class ConsentRequestValidator : AbstractValidator<ConsentRequest>
  {
    public ConsentRequestValidator()
    {
      RuleFor(req => req.Id).NotEmpty().WithMessage("Id is required!");
    }
  }
}