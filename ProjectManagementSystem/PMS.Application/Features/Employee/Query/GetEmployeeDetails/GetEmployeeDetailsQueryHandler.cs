using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Query.GetEmployeeDetails
{
    public class GetEmployeeDetailsQueryHandler : IRequestHandler<GetEmployeeDetailsQuery, GetEmployeeDetailsQueryDto>
    {
        private readonly IEmployeeRepository _repo;

        public GetEmployeeDetailsQueryHandler(IEmployeeRepository repo)
        {
            this._repo = repo;
        }
        public async Task<GetEmployeeDetailsQueryDto> Handle(GetEmployeeDetailsQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.id);
            return data.MapToGetEmployeeDetailsQueryDto();
        }
    }
}
