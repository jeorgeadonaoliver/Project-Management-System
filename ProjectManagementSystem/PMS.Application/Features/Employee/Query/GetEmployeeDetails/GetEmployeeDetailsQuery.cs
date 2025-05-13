using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Query.GetEmployeeDetails
{
    public record GetEmployeeDetailsQuery(int id) : IRequest<GetEmployeeDetailsQueryDto>;
    
}
