using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Query
{
    public class GetJobsQueryHandler : IRequestHandler<GetJobsQuery, List<GetJobsQueryDto>>
    {
        IJobRepository _repo;
        public GetJobsQueryHandler(IJobRepository repo)
        {
            this._repo = repo;   
        }

        public async Task<List<GetJobsQueryDto>> Handle(GetJobsQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetAllAsync();
            return data.Select(x => x.MapToGetJobsQueryDto()).ToList();
        }
    }
}
