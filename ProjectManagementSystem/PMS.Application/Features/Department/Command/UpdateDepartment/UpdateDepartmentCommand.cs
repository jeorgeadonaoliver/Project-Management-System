using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Command.UpdateDepartment
{
    public class UpdateDepartmentCommand : IRequest<Unit>
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; } = null!;
        public string? Location { get; set; }
    }
}
