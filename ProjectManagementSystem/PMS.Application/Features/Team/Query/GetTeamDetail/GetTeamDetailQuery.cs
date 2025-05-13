using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Query.GetTeamDetail
{
    public record GetTeamDetailQuery(int id): IRequest<GetTeamDetailQueryDto>;
    
}
