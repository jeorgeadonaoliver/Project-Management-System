using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query.GetProjectWithTeam
{
    public record GetProjectWithTeamQuery : IRequest<List<GetProjectWithTeamQueryDto>>;
    
}
