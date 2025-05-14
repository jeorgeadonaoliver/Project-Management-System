using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Command.CreateEmployeeProject
{
    public class CreateEmployeeProjectCommandValidator : AbstractValidator<CreateEmployeeProjectCommand>
    {
        IEmployeeProjectsRepository _repo;
        public CreateEmployeeProjectCommandValidator(IEmployeeProjectsRepository repo)
        {
            _repo = repo;
            RuleFor(x => x)
                .NotNull()
                .WithMessage("CreateEmployeeProjectCommand must not be NULL.")
                .MustAsync(IsEmployeeProjectExist)
                .WithMessage("Record Already Exist!");

            RuleFor(x => x.ProjectId)
                .NotNull()
                .WithMessage("Project Id must not be NULL");

            RuleFor(x => x.EmployeeId)
                .NotNull()
                .WithMessage("Employee Id must not be NULL");

            RuleFor(x => x.RoleInProject)
                .NotNull()
                .WithMessage("RoleInProject must not be NULL");
        }

        private async Task<bool> IsEmployeeProjectExist(CreateEmployeeProjectCommand cmd, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(cmd.EmployeeId, cmd.ProjectId);
        }

    }
}
