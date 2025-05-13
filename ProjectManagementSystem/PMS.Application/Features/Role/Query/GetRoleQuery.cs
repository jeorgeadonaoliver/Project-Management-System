using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Query
{
    public record GetRoleQuery : IRequest<List<GetRoleQueryDto>>;
    
}
