using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Query
{
    public class GetDepartmentQueryHandler : IRequestHandler<GetDepartmentQuery, List<GetDepartmentQueryDto>>
    {
        IDepartmentRepository _repo;
        public GetDepartmentQueryHandler(IDepartmentRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<GetDepartmentQueryDto>> Handle(GetDepartmentQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAllAsync();
            return data.Select(x => x.MapToGetDepartmentQueryDto()).ToList();
        }
    }
}
