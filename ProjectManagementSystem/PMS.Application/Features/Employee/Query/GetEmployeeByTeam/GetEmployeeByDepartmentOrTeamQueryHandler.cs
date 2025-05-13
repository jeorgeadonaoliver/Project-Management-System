using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Query.GetEmployeeByTeam
{
    public class GetEmployeeByDepartmentOrTeamQueryHandler : IRequestHandler<GetEmployeeByDepartmentOrTeamQuery, List<GetEmployeeByDepartmentOrTeamQueryDto>>
    {
        private readonly IEmployeeRepository _repo;
        public GetEmployeeByDepartmentOrTeamQueryHandler(IEmployeeRepository repo)
        {
            this._repo = repo;
        }

        public async Task<List<GetEmployeeByDepartmentOrTeamQueryDto>> Handle(GetEmployeeByDepartmentOrTeamQuery request, CancellationToken cancellationToken)
        {
            //if request is department
            if (request.depsOrTeam == 1)
            {
                var depList = await _repo.GetByDepartment(request.id);
                return depList.Select(x => x.MapToGetEmployeeByDepartmentOtTeamQueryDto()).ToList();
            }
            else 
            {
                var data = await _repo.GetByTeam(request.id);
                return data.Select(x => x.MapToGetEmployeeByDepartmentOtTeamQueryDto()).ToList();
            }

               
        }
    }
}
