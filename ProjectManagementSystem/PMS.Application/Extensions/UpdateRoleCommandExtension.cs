using PMS.Application.Features.Role.Command.UpdateRole;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class UpdateRoleCommandExtension
    {
        public static Role MapToRole(this UpdateRoleCommand cmd) 
        {
            return new Role 
            {
                RoleId = cmd.RoleId,
                RoleName = cmd.RoleName,
                Description = cmd.Description
            };
        }
    }
}
