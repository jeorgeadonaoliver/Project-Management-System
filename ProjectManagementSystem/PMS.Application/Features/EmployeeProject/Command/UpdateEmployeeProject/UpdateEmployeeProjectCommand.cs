using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Command.UpdateEmployeeProject
{
    public class UpdateEmployeeProjectCommand : IRequest<Unit>
    {
        public int EmployeeId { get; set; }

        public int ProjectId { get; set; }

        public string? RoleInProject { get; set; }

        public int Id { get; set; }
    }
}
