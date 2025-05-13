using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Query.GetEmployeeDetails
{
    public class GetEmployeeDetailsQueryDto
    {
        public int EmployeeId { get; set; }

        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? PhoneNumber { get; set; }

        public DateOnly HireDate { get; set; }

        public int? JobId { get; set; }

        public string? JobName { get; set; }

        public int? DepartmentId { get; set; }

        public string? DepartmentName { get; set; }

        public decimal? Salary { get; set; }

        public int? ManagerId { get; set; }

        public int? TeamId { get; set; }
        public string? TeamName { get; set; }

        public int? RoleId { get; set; }

        public string? RoleName { get; set; }
    }
}
