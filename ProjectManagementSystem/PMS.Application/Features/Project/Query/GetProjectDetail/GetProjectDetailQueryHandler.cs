using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query.GetProjectDetail
{
    public class GetProjectDetailQueryHandler : IRequestHandler<GetProjectDetailQuery, GetProjectDetailQueryDto>
    {
        IProjectRepository _repo;
        public GetProjectDetailQueryHandler(IProjectRepository repo)
        {
            _repo = repo;            
        }

        public async Task<GetProjectDetailQueryDto> Handle(GetProjectDetailQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.id);
            return data.MapToGetProjectDetailQueryDto();
        }
    }
}
