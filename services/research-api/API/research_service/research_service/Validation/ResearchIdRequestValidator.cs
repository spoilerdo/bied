using FluentValidation;
using ResearchGRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Validation
{
    public class ResearchIdRequestValidator : AbstractValidator<ResearchIdRequest>
    {
        public ResearchIdRequestValidator()
        {
            RuleFor(request => request.Id).NotEmpty().WithMessage("Id can not be empty!");
        }
    }
}
