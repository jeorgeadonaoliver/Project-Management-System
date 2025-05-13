using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Query
{
    public class GetDepartmentQuery : IRequest<List<GetDepartmentQueryDto>>
    {
    }
}
