using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Query.GetDepartmentDetail
{
    public class GetDepartmentDetailQueryDto
    {
        public int DepartmentId { get; set; }

        public string DepartmentName { get; set; } = null!;

        public string? Location { get; set; }
    }
}
