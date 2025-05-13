using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Command.CreateJob
{
    public class CreateJobCommandValidator : AbstractValidator<CreateJobCommand>
    {
        IJobRepository _repo;
        public CreateJobCommandValidator(IJobRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("CreateJobCommand must NOT be NULL.");

            RuleFor(x => x.JobTitle)
                .NotNull()
                .WithMessage("Job Title must NOT be NULL.")
                .MustAsync(IsJobExist)
                .WithMessage("Job Title already Exist");
        }

        private async Task<bool> IsJobExist(string name, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(name);
        }
    }
}
