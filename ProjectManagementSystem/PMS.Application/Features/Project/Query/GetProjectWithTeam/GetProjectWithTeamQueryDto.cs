using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query.GetProjectWithTeam
{
    public class GetProjectWithTeamQueryDto
    {
        public int ProjectId { get; set; }

        public string ProjectName { get; set; } = null!;

        public DateOnly? StartDate { get; set; }

        public DateOnly? EndDate { get; set; }

        public string? Description { get; set; }

        public int? TeamId { get; set; }

        public string? TeamName { get; set; }
    }
}
