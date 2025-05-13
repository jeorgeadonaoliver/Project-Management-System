using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Query.GetDepartmentDetail
{
    public class GetDepartmentDetailQueryHandler : IRequestHandler<GetDepartmentDetailQuery, GetDepartmentDetailQueryDto>
    {
        IDepartmentRepository _repo;

        public GetDepartmentDetailQueryHandler(IDepartmentRepository repo)
        {
            _repo = repo;
        }

        public async Task<GetDepartmentDetailQueryDto> Handle(GetDepartmentDetailQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.id);
            return data.MapToGetDepartmentDetailQueryDto();
        }
    }
}
