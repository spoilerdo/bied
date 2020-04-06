using System.Net.Cache;
using FluentValidation;

namespace consent_service.Validation
{
    public class ConsentIdRequestValidator : AbstractValidator<ConsentIdRequest>
    {
        public ConsentIdRequestValidator()
        {
            RuleFor(req => req.ConsentId).NotEmpty().WithMessage("ConsentId is required!");
        }
    }
}