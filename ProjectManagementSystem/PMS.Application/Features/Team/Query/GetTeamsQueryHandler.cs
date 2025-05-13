using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Query
{
    public class GetTeamsQueryHandler : IRequestHandler<GetTeamsQuery, List<GetTeamsQueryDto>>
    {
        ITeamRepository _repo;
        public GetTeamsQueryHandler(ITeamRepository repo)
        {
            this._repo = repo;            
        }

        public async Task<List<GetTeamsQueryDto>> Handle(GetTeamsQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAllAsync();
            return data.Select(x => x.MapToGetTeamQueryDto()).ToList();
        }
    }
}
