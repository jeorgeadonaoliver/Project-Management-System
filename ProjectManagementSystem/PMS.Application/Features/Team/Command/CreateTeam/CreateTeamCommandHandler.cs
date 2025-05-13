using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Command.CreateTeam
{
    public class CreateTeamCommandHandler : IRequestHandler<CreateTeamCommand, Unit>
    {
        ITeamRepository _repo;

        public CreateTeamCommandHandler(ITeamRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(CreateTeamCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateTeamCommandValidator(_repo);
            var result = await validator.ValidateAsync(request, cancellationToken);
            result.Check();

            await _repo.CreateAsync(request.MapToTeam());
            return Unit.Value;
        }
    }
}
