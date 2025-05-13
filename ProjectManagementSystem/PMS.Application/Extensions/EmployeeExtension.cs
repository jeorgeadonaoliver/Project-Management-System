using PMS.Application.Features.Employee.Query.GetAllEmployee;
using PMS.Application.Features.Employee.Query.GetEmployeeByTeam;
using PMS.Application.Features.Employee.Query.GetEmployeeDetails;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class EmployeeExtension
    {
        public static GetEmployeeQueryDto MapToGetAllEmployeeQueryDto(this Employee employee) 
        {
            return new GetEmployeeQueryDto
            { 
            
                Email = employee.Email,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                EmployeeId = employee.EmployeeId,
                DepartmentId = employee.DepartmentId,
                HireDate = employee.HireDate,
                JobId = employee.JobId,
                ManagerId = employee.ManagerId,
                PhoneNumber = employee.PhoneNumber,
                RoleId = employee.RoleId,
                Salary = employee.Salary,
                TeamId = employee.TeamId,
                TeamName = employee.Team.TeamName,
                RoleName = employee.Role.RoleName,
                DepartmentName = employee.Department.DepartmentName,
                JobName = employee.Job.JobTitle
            };
        }

        public static GetEmployeeByDepartmentOrTeamQueryDto MapToGetEmployeeByDepartmentOtTeamQueryDto(this Employee employee)
        {
            return new GetEmployeeByDepartmentOrTeamQueryDto
            {

                Email = employee.Email,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                EmployeeId = employee.EmployeeId,
                DepartmentId = employee.DepartmentId,
                HireDate = employee.HireDate,
                JobId = employee.JobId,
                ManagerId = employee.ManagerId,
                PhoneNumber = employee.PhoneNumber,
                RoleId = employee.RoleId,
                Salary = employee.Salary,
                TeamId = employee.TeamId,
                TeamName = employee.Team.TeamName,
                RoleName = employee.Role.RoleName,
                DepartmentName = employee.Department.DepartmentName,
                JobName = employee.Job.JobTitle
            };
        }

        public static GetEmployeeDetailsQueryDto MapToGetEmployeeDetailsQueryDto(this Employee employee)
        {
            return new GetEmployeeDetailsQueryDto
            {

                Email = employee.Email,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                EmployeeId = employee.EmployeeId,
                DepartmentId = employee.DepartmentId,
                HireDate = employee.HireDate,
                JobId = employee.JobId,
                ManagerId = employee.ManagerId,
                PhoneNumber = employee.PhoneNumber,
                RoleId = employee.RoleId,
                Salary = employee.Salary,
                TeamId = employee.TeamId,
                TeamName = employee.Team.TeamName,
                RoleName = employee.Role.RoleName,
                DepartmentName = employee.Department.DepartmentName,
                JobName = employee.Job.JobTitle
            };
        }
    }
}
