using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuestionnaireResultGRPC;

namespace API.Validators
{
    public class QuestionnaireIdRequestValidator : AbstractValidator<getQuestionnaireResultRequest>
    {
        public QuestionnaireIdRequestValidator()
        {
            RuleFor(request => request.Id).NotEmpty().WithMessage("Id can not be empty!");
        }
    }
}