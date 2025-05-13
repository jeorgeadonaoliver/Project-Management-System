using PMS.Application.Features.Team.Command.UpdateTeam;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class UpdateTeamCommandExtension
    {
        public static Team MapToTeam(this UpdateTeamCommand cmd) 
        {
            return new Team
            {
                TeamId = cmd.TeamId,
                TeamName = cmd.TeamName,
                Description = cmd.Description,
            };
        }
    }
}
