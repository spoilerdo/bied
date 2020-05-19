using FluentValidation;
using ResearchGRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Validation
{
    public class ResearchEditRequestValidator : AbstractValidator<ResearchEditRequest>
    {
        public ResearchEditRequestValidator()
        {
            RuleFor(req => req.Id).NotEmpty().WithMessage("Research ID is required!");
            RuleFor(req => req.Name).NotEmpty().WithMessage("Research name is required!");
            RuleFor(req => req.OwnerId).NotEmpty().WithMessage("OwnerId of research is required!");
        }
    }
}
