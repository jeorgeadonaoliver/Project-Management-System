using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Team.Query.GetTeamDetail
{
    public class GetTeamDetailQueryHandler : IRequestHandler<GetTeamDetailQuery, GetTeamDetailQueryDto>
    {
        ITeamRepository _repo;

        public GetTeamDetailQueryHandler(ITeamRepository repo)
        {
            _repo = repo;            
        }

        public async Task<GetTeamDetailQueryDto> Handle(GetTeamDetailQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.id);
            return data.MapToGetTeamDetailQueryDto();
        }
    }
}
