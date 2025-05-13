using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Query.GetRoleDetail
{
    public record GetRoleDetailQuery(int id) : IRequest<GetRoleDetailQueryDto>;
    
}
