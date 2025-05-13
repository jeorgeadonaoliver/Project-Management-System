using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Query
{
    public class GetEmployeeProjectQueryDto
    {
        public int EmployeeId { get; set; }

        public int ProjectId { get; set; }

        public string? RoleInProject { get; set; }
    }
}
