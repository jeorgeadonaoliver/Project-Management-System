using PMS.Application.Features.Department.Query;
using PMS.Application.Features.Department.Query.GetDepartmentDetail;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class DepartmentExtension
    {
        public static GetDepartmentQueryDto MapToGetDepartmentQueryDto(this Department department) 
        {
            return new GetDepartmentQueryDto { 
            
                DepartmentId = department.DepartmentId,
                DepartmentName = department.DepartmentName,
                Location = department.Location
            };
        }

        public static GetDepartmentDetailQueryDto MapToGetDepartmentDetailQueryDto(this Department department)
        {
            return new GetDepartmentDetailQueryDto
            {

                DepartmentId = department.DepartmentId,
                DepartmentName = department.DepartmentName,
                Location = department.Location
            };
        }

        
    }
}
