using FluentValidation;
using Questionnaire.Services;

namespace API.Validators
{
    public class CreateQuestionnaireRequestValidator : AbstractValidator<QuestionnaireCreateRequest>
    {
        public CreateQuestionnaireRequestValidator()
        {
            RuleFor(request => request.Name).NotEmpty().WithMessage("Name cannot be empty");
            RuleFor(request => request.Name).MaximumLength(255).WithMessage("Name cannot have more than 255 characters");
            RuleForEach(request => request.Question).SetValidator(new QuestionValidator());
        }
    }
}