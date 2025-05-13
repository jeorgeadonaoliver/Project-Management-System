using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Command.UpdateJob
{
    public class UpdateJobCommandValidator : AbstractValidator<UpdateJobCommand>
    {
        IJobRepository _repo;
        public UpdateJobCommandValidator(IJobRepository repo)
        {
            this._repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("UpdateJobCommand must not be NULL.");

            RuleFor(x => x.JobId)
                .NotNull()
                .WithMessage("Job Id must not be NULL.")
                .MustAsync(IsJobExist)
                .WithMessage("Job Id Does NOT EXIST.");
        }

        private async Task<bool> IsJobExist(int id, CancellationToken cancellationToken) 
        {
            return await _repo.GetAny(id);
        }
    }
}
