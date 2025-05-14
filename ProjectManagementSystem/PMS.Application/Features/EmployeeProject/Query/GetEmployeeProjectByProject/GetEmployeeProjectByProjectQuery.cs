using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByProject
{
    public record GetEmployeeProjectByProjectQuery(int projectId) : IRequest<List<GetEmployeeProjectByProjectQueryDto>>;
    
}
