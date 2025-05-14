using PMS.Application.Features.EmployeeProject.Command.UpdateEmployeeProject;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class UpdateEmployeeProjectCommandExtension
    {
        public static EmployeeProject MapToEmployeeProject(this UpdateEmployeeProjectCommand emp) 
        {
            return new EmployeeProject 
            {
                EmployeeId = emp.EmployeeId,
                ProjectId = emp.ProjectId,
                RoleInProject = emp.RoleInProject,
                Id = emp.Id
            };
        }
    }
}
