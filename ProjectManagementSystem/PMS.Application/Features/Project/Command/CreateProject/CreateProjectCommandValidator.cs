using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Command.CreateProject
{
    public class CreateProjectCommandValidator : AbstractValidator<CreateProjectCommand>
    {
        IProjectRepository _repo;
        public CreateProjectCommandValidator(IProjectRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("CreateProjectCommand must not be NULL.");

            RuleFor(x => x.ProjectName)
                .NotNull()
                .WithMessage("Project name must not be NULL.")
                .MustAsync(IsProjectExist)
                .WithMessage("Project name already Exist.");
        }

        private async Task<bool> IsProjectExist(string name, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(name);
        }
    }
}
