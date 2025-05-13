using MediatR;
using PMS.Application.Features.Team.Command.CreateTeam;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class CreateTeamCommandExtension 
    {
        public static Team MapToTeam(this CreateTeamCommand cmd) 
        {
            return new Team 
            {
                TeamName = cmd.TeamName,
                Description = cmd.Description
            };
        }
    }
}
