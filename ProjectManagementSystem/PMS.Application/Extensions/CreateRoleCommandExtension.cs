using PMS.Application.Features.Role.Command.CreateRole;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class CreateRoleCommandExtension
    {
        public static Role MapToRole(this CreateRoleCommand cmd) 
        {
            return new Role 
            {
                RoleName = cmd.RoleName,
                Description = cmd.Description
            };
        }
    }
}
