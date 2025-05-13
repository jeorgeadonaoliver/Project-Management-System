using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Command.UpdateTeam
{
    public class UpdateTeamCommandValidator : AbstractValidator<UpdateTeamCommand>
    {
        ITeamRepository _repo;
        public UpdateTeamCommandValidator(ITeamRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("Update Team Command must NOT be null.");

            RuleFor(x => x.TeamId)
                .NotNull()
                .WithMessage("Team Id must NOT be null.")
                .MustAsync(IsTeamExist)
                .WithMessage("Team Id does not Exist!");
            
        }

        private async Task<bool> IsTeamExist(int id, CancellationToken cancellationToken) 
        {
            return await _repo.GetAny(id);
        }

    }
}
