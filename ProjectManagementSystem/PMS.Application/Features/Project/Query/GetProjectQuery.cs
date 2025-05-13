using MediatR;
using PMS.Application.Features.Role.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query
{
    public record GetProjectQuery : IRequest<List<GetProjectQueryDto>>;
}
