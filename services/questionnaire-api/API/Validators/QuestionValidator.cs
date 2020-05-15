using FluentValidation;
using Questionnaire.GRPC;

namespace API.Validators
{
    public class QuestionValidator : AbstractValidator<QuestionRequest>
    {
        public QuestionValidator()
        {
            RuleFor(request => request.Label).NotEmpty().WithMessage("Label cannot be empty");
            RuleFor(request => request.Label).MaximumLength(255).WithMessage("Label cannot contain more then 255 characters");
            RuleFor(request => request.Type).IsInEnum().WithMessage("The value provided is not a valid option");
            RuleFor(request => request.Description).MaximumLength(1000)
                .WithMessage("Description cannot contain more then 1000 characters");
            RuleFor(request => request.Index).GreaterThan(0).WithMessage("The index must be greater than 0");
        }
    }
}