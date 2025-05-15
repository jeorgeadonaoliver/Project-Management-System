using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Command.CreateRole
{
    public class CreateRoleCommandValidator : AbstractValidator<CreateRoleCommand>
    {
        IRoleRepository _repo;
        public CreateRoleCommandValidator(IRoleRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("CreateRoleCommand must not be NULL.");

            RuleFor(x => x.RoleName)
                .NotNull()
                .WithMessage("RoleName must not be NULL.")
                .MustAsync(IsRoleExist)
                .WithMessage("Role Name already Exist.");
        }
        private async Task<bool> IsRoleExist(string name, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(name);
        }
    }
}
