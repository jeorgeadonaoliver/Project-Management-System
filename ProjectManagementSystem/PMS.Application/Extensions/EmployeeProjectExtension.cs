using PMS.Application.Features.EmployeeProject.Query;
using PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByEmployee;
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

        public static GetEmployeeProjectByEmployeeQueryDto MapToGetEmployeeByProjectQueryDto(this EmployeeProject employeeProject) 
        {
            return new GetEmployeeProjectByEmployeeQueryDto { 
            
                EmployeeId = employeeProject.EmployeeId,
                EmployeeName = employeeProject.Employee.LastName + ", " + employeeProject.Employee.FirstName,
                ProjectId = employeeProject.ProjectId,
                ProjectName = employeeProject.Project.ProjectName,
                RoleInProject = employeeProject.RoleInProject
            };
        }
    }
}
