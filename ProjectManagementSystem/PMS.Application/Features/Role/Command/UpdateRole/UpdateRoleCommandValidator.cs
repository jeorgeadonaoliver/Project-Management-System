using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Command.UpdateRole
{
    public class UpdateRoleCommandValidator : AbstractValidator<UpdateRoleCommand>
    {
        IRoleRepository _repo;
        public UpdateRoleCommandValidator(IRoleRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("UpdateRoleCommand must not be NULL.");

            RuleFor(x => x.RoleId)
                .NotNull()
                .WithMessage("RoleId must not be NULL.")
                .MustAsync(IsRoleExist)
                .WithMessage("RoleId does not Exist.");
        }

        private async Task<bool> IsRoleExist(int id, CancellationToken cancellationToken)
        {
            return await _repo.GetAny(id);
        }
    }
}
