using PMS.Application.Features.EmployeeProject.Command.CreateEmployeeProject;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class CreateEmployeeProjectCommandExtension
    {
        public static EmployeeProject MapToEmployeeProject(this CreateEmployeeProjectCommand cmd)
        {
            return new EmployeeProject 
            {
                EmployeeId = cmd.EmployeeId,
                ProjectId = cmd.ProjectId,
                RoleInProject = cmd.RoleInProject,
            };
        }
    }
}
