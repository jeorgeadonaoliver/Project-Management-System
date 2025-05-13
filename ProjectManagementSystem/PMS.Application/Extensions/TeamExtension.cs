using PMS.Application.Features.Team.Query;
using PMS.Application.Features.Team.Query.GetTeamDetail;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class TeamExtension
    {
        public static GetTeamsQueryDto MapToGetTeamQueryDto(this Team team) 
        {
            return new GetTeamsQueryDto
            {
                TeamId = team.TeamId,
                TeamName = team.TeamName,
                Description = team.Description
            };
        }

        public static GetTeamDetailQueryDto MapToGetTeamDetailQueryDto(this Team team)
        {
            return new GetTeamDetailQueryDto
            {
                TeamId = team.TeamId,
                TeamName = team.TeamName,
                Description = team.Description
            };
        }
    }
}
