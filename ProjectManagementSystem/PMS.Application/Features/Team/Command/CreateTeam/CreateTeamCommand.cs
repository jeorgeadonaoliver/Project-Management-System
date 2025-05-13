using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Command.CreateTeam
{
    public class CreateTeamCommand : IRequest<Unit>
    {
        public string TeamName { get; set; } = null!;

        public string? Description { get; set; }
    }
}
