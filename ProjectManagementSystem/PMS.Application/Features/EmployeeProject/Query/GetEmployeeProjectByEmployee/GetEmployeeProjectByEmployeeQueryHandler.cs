using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByEmployee
{
    public class GetEmployeeProjectByEmployeeQueryHandler : IRequestHandler<GetEmployeeProjectByEmployeeQuery, List<GetEmployeeProjectByEmployeeQueryDto>>
    {

        IEmployeeProjectsRepository _repo;

        public GetEmployeeProjectByEmployeeQueryHandler(IEmployeeProjectsRepository repo)
        {
            _repo = repo;
        }
        public async Task<List<GetEmployeeProjectByEmployeeQueryDto>> Handle(GetEmployeeProjectByEmployeeQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.employeeid);
            return data.Select(x => x.MapToGetEmployeeByProjectQueryDto()).ToList();
        }
    }
}
