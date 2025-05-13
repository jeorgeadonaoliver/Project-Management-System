using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Query.GetJobDetail
{
    public class GetJobDetailQueryHandler : IRequestHandler<GetJobDetailQuery, GetJobDetailQueryDto>
    {
        IJobRepository _repo;

        public GetJobDetailQueryHandler(IJobRepository repo)
        {
            _repo = repo;
        }

        public async Task<GetJobDetailQueryDto> Handle(GetJobDetailQuery request, CancellationToken cancellationToken)
        {
            var data = await _repo.GetById(request.id);
            return data.MapToGetJobDetailQueryDto();
        }
    }
}
