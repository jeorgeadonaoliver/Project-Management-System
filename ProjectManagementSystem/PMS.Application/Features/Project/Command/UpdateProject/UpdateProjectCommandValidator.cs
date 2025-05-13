using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Command.UpdateProject
{
    public class UpdateProjectCommandValidator : AbstractValidator<UpdateProjectCommand>
    {
        IProjectRepository _repo;
        public UpdateProjectCommandValidator(IProjectRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("UpdateProjectCommand must not be NULL.");

            RuleFor(x => x.ProjectId)
                .NotNull()
                .WithMessage("Project Id must not be NULL.")
                .MustAsync(IsProjectExist)
                .WithMessage("Project Id does NOT EXIST");
        }

        private async Task<bool> IsProjectExist(int id, CancellationToken cancellationToken) 
        {
            return await _repo.GetAny(id);
        }
    }
}
