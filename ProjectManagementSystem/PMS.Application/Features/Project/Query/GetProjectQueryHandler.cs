using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using PMS.Application.Features.Role.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query
{
    public class GetProjectQueryHandler : IRequestHandler<GetProjectQuery, List<GetProjectQueryDto>>
    {
        IProjectRepository _repo;
        public GetProjectQueryHandler(IProjectRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<GetProjectQueryDto>> Handle(GetProjectQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAllDetails();
            return data.Select(x => x.MapToGetProjectQueryDto()).ToList();
        }
    }
}
