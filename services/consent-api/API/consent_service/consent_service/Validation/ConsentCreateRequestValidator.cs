using FluentValidation;
using ConsentGRPC;

namespace consent_service.Validation
{
  public class ConsentCreateRequestValidator : AbstractValidator<ConsentEditRequest>
  {
    public ConsentCreateRequestValidator()
    {
      RuleFor(req => req.UserId).NotEmpty().WithMessage("UserId is requered!");
      RuleFor(req => req.DatasourceId).NotEmpty().WithMessage("DatasourceId is required!");
      RuleFor(req => req.Consent).NotNull().WithMessage("Consent boolean is required");
    }
  }
}