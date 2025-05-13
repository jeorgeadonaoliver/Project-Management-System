using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Query.GetJobDetail
{
    public record GetJobDetailQuery(int id) : IRequest<GetJobDetailQueryDto>;
    
}
