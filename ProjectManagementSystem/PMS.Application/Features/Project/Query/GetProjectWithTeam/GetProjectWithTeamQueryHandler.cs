using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query.GetProjectWithTeam
{
    public class GetProjectWithTeamQueryHandler : IRequestHandler<GetProjectWithTeamQuery, List<GetProjectWithTeamQueryDto>>
    {
        IProjectRepository _repo;
        public GetProjectWithTeamQueryHandler(IProjectRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<GetProjectWithTeamQueryDto>> Handle(GetProjectWithTeamQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAllDetails();
            return data.Select(x => x.MapToGetProjectWithTeamQueryDto()).ToList();
        }
    }
}
