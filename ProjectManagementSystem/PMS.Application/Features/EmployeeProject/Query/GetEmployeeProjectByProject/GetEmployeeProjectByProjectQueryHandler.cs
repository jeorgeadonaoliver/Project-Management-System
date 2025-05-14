using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByProject
{
    public class GetEmployeeProjectByProjectQueryHandler : IRequestHandler<GetEmployeeProjectByProjectQuery, List<GetEmployeeProjectByProjectQueryDto>>
    {
        IEmployeeProjectsRepository _repo;

        public GetEmployeeProjectByProjectQueryHandler(IEmployeeProjectsRepository repo)
        {
            _repo = repo;
        }
        public async Task<List<GetEmployeeProjectByProjectQueryDto>> Handle(GetEmployeeProjectByProjectQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetByProjectId(request.projectId);
            return data.Select(x => x.MapToGetEmployeeProjectByProjectQueryDto()).ToList();
        }
    }

}
