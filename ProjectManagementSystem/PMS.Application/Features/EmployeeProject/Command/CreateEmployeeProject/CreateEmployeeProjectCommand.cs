using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Command.CreateEmployeeProject
{
    public class CreateEmployeeProjectCommand : IRequest<Unit>
    {
        public int EmployeeId { get; set; }

        public int ProjectId { get; set; }

        public string? RoleInProject { get; set; }

    }
}
