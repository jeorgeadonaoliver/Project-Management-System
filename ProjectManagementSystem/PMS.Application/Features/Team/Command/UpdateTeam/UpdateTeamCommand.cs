using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Command.UpdateTeam
{
    public class UpdateTeamCommand : IRequest<Unit>
    {
        public int TeamId { get; set; }

        public string TeamName { get; set; } = null!;

        public string? Description { get; set; }
    }
}
