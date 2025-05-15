using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Command.CreateRole
{
    public class CreateRoleCommand : IRequest<Unit>
    {

        public string RoleName { get; set; } = null!;

        public string? Description { get; set; }
    }
}
