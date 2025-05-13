using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Query.GetRoleDetail
{
    public class GetRoleDetailQueryHandler : IRequestHandler<GetRoleDetailQuery, GetRoleDetailQueryDto>
    {
        IRoleRepository _repo;
        public GetRoleDetailQueryHandler(IRoleRepository repo)
        {
            _repo = repo;            
        }

        public async Task<GetRoleDetailQueryDto> Handle(GetRoleDetailQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.id);
            return data.MapToGetRoleDetailQueryDto();
        }
    }
}
