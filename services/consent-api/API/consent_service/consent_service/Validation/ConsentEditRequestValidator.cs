using FluentValidation;

namespace consent_service.Validation
{
    public class ConsentEditRequestValidator : AbstractValidator<ConsentEditRequest>
    {
        public ConsentEditRequestValidator()
        {
            RuleFor(req => req.Id).NotEmpty().WithMessage("Id is required!");
            RuleFor(req => req.UserId).NotEmpty().WithMessage("UserId is requered!");
            RuleFor(req => req.DatasourceId).NotEmpty().WithMessage("DatasourceId is required!");
            RuleFor(req => req.Consent).NotNull().WithMessage("Consent boolean is required");
        }
    }
}