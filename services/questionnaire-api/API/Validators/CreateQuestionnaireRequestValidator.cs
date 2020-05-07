using FluentValidation;
using Questionnaire.GRPC;

namespace API.Validators
{
    public class CreateQuestionnaireRequestValidator : AbstractValidator<QuestionnaireCreateRequest>
    {
        public CreateQuestionnaireRequestValidator()
        {
            RuleFor(request => request.Name).NotEmpty().WithMessage("Name cannot be empty");
            RuleFor(request => request.Name).MaximumLength(255).WithMessage("Name cannot have more than 255 characters");
        }
    }
}