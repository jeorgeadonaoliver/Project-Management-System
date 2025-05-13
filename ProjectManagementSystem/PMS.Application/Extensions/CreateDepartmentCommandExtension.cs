using PMS.Application.Features.Department.Command.CreateDepartment;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class CreateDepartmentCommandExtension
    {
        public static Department MapToDepartment(this CreateDepartmentCommand cmd) 
        {
            return new Department 
            {
                DepartmentName =cmd.DepartmentName,
                Location = cmd.Location
            };
        }
    }
}
