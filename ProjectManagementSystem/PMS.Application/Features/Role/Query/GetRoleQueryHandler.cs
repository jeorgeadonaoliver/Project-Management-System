using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Query
{
    public class GetRoleQueryHandler : IRequestHandler<GetRoleQuery, List<GetRoleQueryDto>>
    {
        IRoleRepository _repo;
        public GetRoleQueryHandler(IRoleRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<GetRoleQueryDto>> Handle(GetRoleQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAllAsync();
            return data.Select(x => x.MapToGetRoleQueryDto()).ToList();
        }
    }
}
