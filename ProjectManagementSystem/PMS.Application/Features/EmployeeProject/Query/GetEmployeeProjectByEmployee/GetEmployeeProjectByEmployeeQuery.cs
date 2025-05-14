using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByEmployee
{
    public record GetEmployeeProjectByEmployeeQuery(int employeeid) : IRequest<List<GetEmployeeProjectByEmployeeQueryDto>>;
    
}
