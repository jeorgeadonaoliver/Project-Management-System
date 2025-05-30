﻿using PMS.Application.Features.Project.Query;
using PMS.Application.Features.Project.Query.GetProjectDetail;
using PMS.Application.Features.Project.Query.GetProjectWithTeam;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class ProjectExtension
    {
        public static GetProjectQueryDto MapToGetProjectQueryDto( this Project project) 
        {
            return new GetProjectQueryDto 
            {
                ProjectId = project.ProjectId,
                Description = project.Description,
                EndDate = project.EndDate,
                ProjectName = project.ProjectName,
                StartDate = project.StartDate,
                TeamId = project.TeamId,
                TeamName = project.Team.TeamName
            };
        }

        public static GetProjectDetailQueryDto MapToGetProjectDetailQueryDto(this Project project) 
        {
            return new GetProjectDetailQueryDto 
            {
                ProjectId = project.ProjectId,
                Description = project.Description,
                EndDate = project.EndDate,
                ProjectName = project.ProjectName,
                StartDate = project.StartDate,
                TeamId = project.TeamId,
                TeamName = project.Team.TeamName
            };
        }

        public static GetProjectWithTeamQueryDto MapToGetProjectWithTeamQueryDto(this Project project)
        {
            return new GetProjectWithTeamQueryDto 
            {
                ProjectId = project.ProjectId,
                Description = project.Description,
                EndDate = project.EndDate,
                ProjectName = project.ProjectName,
                StartDate = project.StartDate,
                TeamId = project.TeamId,
                TeamName = project.Team.TeamName
            };
        }
    }
}
