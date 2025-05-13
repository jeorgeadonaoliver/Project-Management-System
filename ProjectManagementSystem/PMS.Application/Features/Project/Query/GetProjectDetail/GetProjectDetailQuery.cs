using MediatR;
using PMS.Application.Features.Role.Query.GetRoleDetail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Query.GetProjectDetail
{
    public record GetProjectDetailQuery(int id) : IRequest<GetProjectDetailQueryDto>;
}
