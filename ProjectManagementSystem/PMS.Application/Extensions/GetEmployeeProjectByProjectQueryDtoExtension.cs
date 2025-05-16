using PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByProject;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class GetEmployeeProjectByProjectQueryDtoExtension
    {
        public static GetEmployeeProjectByProjectQueryDto MapToGetEmployeeProjectByProjectQueryDto(this EmployeeProject empPrj) 
        {
            return new GetEmployeeProjectByProjectQueryDto 
            {
                EmployeeId = empPrj.EmployeeId,
                EmployeeName = empPrj.Employee.LastName + ", " + empPrj.Employee.FirstName,
                ProjectId = empPrj.ProjectId,
                ProjectName = empPrj.Project.ProjectName,
                ProjectDescription = empPrj.Project.Description,
                RoleInProject = empPrj.RoleInProject,
                Id = empPrj.Id
            };
        }
    }
}
