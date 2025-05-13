using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Query.GetAllEmployee
{
    public class GetAllEmployeeQueryHandler : IRequestHandler<GetAllEmployeeQuery, List<GetEmployeeQueryDto>>
    {
        private readonly IEmployeeRepository _repo;
        List<GetEmployeeQueryDto> _list;

        public GetAllEmployeeQueryHandler(IEmployeeRepository repo)
        {
            this._repo = repo;
            this._list = new List<GetEmployeeQueryDto>();
        }

        public async Task<List<GetEmployeeQueryDto>> Handle(GetAllEmployeeQuery request, CancellationToken cancellationToken)
        {
            var list = await _repo.GetAllDetailsAsync();
            return list.Select(x => x.MapToGetAllEmployeeQueryDto()).ToList();
        }
    }
}
