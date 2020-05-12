using System.Net.Cache;
using FluentValidation;

namespace consent_service.Validation
{
    public class ConsentRequestValidator : AbstractValidator<ConsentRequest>
    {
        public ConsentRequestValidator()
        {
            RuleFor(req => req.UserId).NotEmpty().WithMessage("UserId is requered!");
            RuleFor(req => req.DatasourceId).NotEmpty().WithMessage("DatasourceId is required!");
            RuleFor(req => req.Consent).NotEmpty().WithMessage("Consent boolean is required");
        }
    }
}