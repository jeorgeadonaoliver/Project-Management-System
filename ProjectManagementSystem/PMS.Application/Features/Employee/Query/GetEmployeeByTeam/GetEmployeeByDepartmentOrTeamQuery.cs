using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Query.GetEmployeeByTeam
{
    public record GetEmployeeByDepartmentOrTeamQuery(int depsOrTeam, int id) : IRequest<List<GetEmployeeByDepartmentOrTeamQueryDto>>;
}
