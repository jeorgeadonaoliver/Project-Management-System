using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Query
{
    public class GetEmployeeProjectQueryHandler : IRequestHandler<GetEmployeeProjectQuery, List<GetEmployeeProjectQueryDto>>
    {
        IEmployeeProjectsRepository _repo;
        public GetEmployeeProjectQueryHandler(IEmployeeProjectsRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<GetEmployeeProjectQueryDto>> Handle(GetEmployeeProjectQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAll();
            return data.Select(x => x.MapToGetEmployeeProjectQueryDto()).ToList();
        }
    }
}
