using PMS.Application.Features.Role.Query;
using PMS.Application.Features.Role.Query.GetRoleDetail;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class RoleExtension
    {
        public static GetRoleQueryDto MapToGetRoleQueryDto( this Role role) 
        {
            return new GetRoleQueryDto 
            {
                RoleId = role.RoleId,
                RoleName = role.RoleName,
                Description = role.Description,
            };
        }

        public static GetRoleDetailQueryDto MapToGetRoleDetailQueryDto(this Role role) 
        {
            return new GetRoleDetailQueryDto
            {
                RoleId = role.RoleId,
                RoleName = role.RoleName,
                Description = role.Description,
            };
        }
    }
}
