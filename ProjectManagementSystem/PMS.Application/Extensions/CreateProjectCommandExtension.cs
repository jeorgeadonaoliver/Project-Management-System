using PMS.Application.Features.Project.Command.CreateProject;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class CreateProjectCommandExtension
    {
        public static Project MapToJob(this CreateProjectCommand command) 
        {
            return new Project 
            {
                Description = command.Description,
                EndDate = command.EndDate,
                StartDate = command.StartDate,
                ProjectName = command.ProjectName,
                TeamId = command.TeamId
            };
        }
    }
}
