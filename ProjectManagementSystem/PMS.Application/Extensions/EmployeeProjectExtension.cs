using PMS.Application.Features.EmployeeProject.Query;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class EmployeeProjectExtension
    {
        public static GetEmployeeProjectQueryDto MapToGetEmployeeProjectQueryDto(this EmployeeProject employeeProject) 
        {
            return new GetEmployeeProjectQueryDto 
            {
                EmployeeId = employeeProject.EmployeeId,
                ProjectId = employeeProject.ProjectId,
                RoleInProject = employeeProject.RoleInProject
            };
        }
    }
}
