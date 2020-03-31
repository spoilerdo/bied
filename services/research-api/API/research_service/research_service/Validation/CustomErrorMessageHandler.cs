using FluentValidation.Results;
using Grpc.AspNetCore.FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace research_service.Validation
{
    public class CustomErrorMessageHandler : IValidatorErrorMessageHandler
    {
        public Task<string> HandleAsync(IList<ValidationFailure> failures)
        {
            return Task.FromResult(@$"
            The following validation errors occured: 
            {string.Join(" - ", failures.Where(f => f.ErrorMessage != null).Select(f => f.ErrorMessage))}");
        }
    }
}
