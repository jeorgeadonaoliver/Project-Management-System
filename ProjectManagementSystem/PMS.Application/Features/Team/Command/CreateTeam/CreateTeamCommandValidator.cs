using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Command.CreateTeam
{
    public class CreateTeamCommandValidator : AbstractValidator<CreateTeamCommand>
    {
        ITeamRepository _repo;
        public CreateTeamCommandValidator(ITeamRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("Create Team Command Must not be NULL.");

            RuleFor(x => x.TeamName)
                .NotNull()
                .WithMessage("Team Name must not be NULL.")
                .MustAsync(IsTeamExist)
                .WithMessage("Team Name already Exist.");
        }

        private async Task<bool> IsTeamExist(string name, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(name);
        }
    }
}
