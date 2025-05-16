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
                EmployeeName = employeeProject.Employee.LastName + ", " + employeeProject.Employee.FirstName,
                ProjectId = employeeProject.ProjectId,
                RoleInProject = employeeProject.RoleInProject,
                ProjectName = employeeProject.Project.ProjectName,
                ProjectDescription = employeeProject.Project.Description,
                Id = employeeProject.Id
            };
        }

        public static GetEmployeeProjectByEmployeeQueryDto MapToGetEmployeeByProjectQueryDto(this EmployeeProject employeeProject) 
        {
            return new GetEmployeeProjectByEmployeeQueryDto { 
            
                EmployeeId = employeeProject.EmployeeId,
                EmployeeName = employeeProject.Employee.LastName + ", " + employeeProject.Employee.FirstName,
                ProjectId = employeeProject.ProjectId,
                ProjectName = employeeProject.Project.ProjectName,
                RoleInProject = employeeProject.RoleInProject,
                ProjectDescription = employeeProject.Project.Description,
                Id = employeeProject.Id
            };
        }
    }
}
