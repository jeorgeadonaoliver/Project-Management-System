using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Command.UpdateRole
{
    public class UpdateRoleCommand : IRequest<Unit>
    {
        public int RoleId { get; set; }

        public string RoleName { get; set; } = null!;

        public string? Description { get; set; }
    }
}
