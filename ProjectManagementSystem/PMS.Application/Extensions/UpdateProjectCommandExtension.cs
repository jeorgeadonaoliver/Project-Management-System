using PMS.Application.Features.Project.Command.UpdateProject;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class UpdateProjectCommandExtension
    {
        public static Project MapToProject(this UpdateProjectCommand command) 
        {
            return new Project
            {
                Description = command.Description,
                ProjectId = command.ProjectId,
                EndDate = command.EndDate,
                StartDate = command.StartDate,
                ProjectName = command.ProjectName,
                TeamId = command.TeamId,
            };
        }
    }
}
