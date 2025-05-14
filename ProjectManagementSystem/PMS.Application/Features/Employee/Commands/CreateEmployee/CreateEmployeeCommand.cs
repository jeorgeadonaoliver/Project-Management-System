using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Commands.CreateEmployee
{
    public class CreateEmployeeCommand : IRequest<Unit>
    {
        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? PhoneNumber { get; set; }

        public DateOnly HireDate { get; set; }

        public int? JobId { get; set; }

        public int? DepartmentId { get; set; }

        public decimal? Salary { get; set; }

        public int? ManagerId { get; set; }

        public int? TeamId { get; set; }

        public int? RoleId { get; set; }
    }
}
