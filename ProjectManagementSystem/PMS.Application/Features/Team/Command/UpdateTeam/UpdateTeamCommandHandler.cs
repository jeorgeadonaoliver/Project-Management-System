using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Command.UpdateTeam
{
    public class UpdateTeamCommandHandler : IRequestHandler<UpdateTeamCommand, Unit>
    {
        ITeamRepository _repo;
        public UpdateTeamCommandHandler(ITeamRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(UpdateTeamCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateTeamCommandValidator(_repo);
            var result = await validator.ValidateAsync(request, cancellationToken);
            result.Check();       

            await _repo.UpdateAsync(request.MapToTeam());
            return Unit.Value;
        }
    }
}
