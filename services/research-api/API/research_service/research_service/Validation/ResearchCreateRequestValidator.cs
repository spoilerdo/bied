﻿using FluentValidation;
using ResearchGRPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Validation
{
    public class ResearchCreateRequestValidator : AbstractValidator<ResearchCreateRequest>
    {
        public ResearchCreateRequestValidator()
        {
            RuleFor(req => req.Name).NotEmpty().WithMessage("Research name is required!");
            RuleFor(req => req.OwnerId).NotEmpty().WithMessage("OwnerId of research is required!");
        }
    }
}
