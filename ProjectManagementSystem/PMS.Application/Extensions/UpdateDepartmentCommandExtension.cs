using PMS.Application.Features.Department.Command.UpdateDepartment;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class UpdateDepartmentCommandExtension
    {
        public static Department MapTpDepartment(this UpdateDepartmentCommand cmd) 
        {
            return new Department { 
            
                DepartmentId = cmd.DepartmentId,
                DepartmentName = cmd.DepartmentName,
                Location = cmd.Location
            };
        }
    }
}
