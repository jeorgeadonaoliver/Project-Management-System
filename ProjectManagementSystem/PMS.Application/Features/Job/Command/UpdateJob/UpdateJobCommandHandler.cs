using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Command.UpdateJob
{
    public class UpdateJobCommandHandler : IRequestHandler<UpdateJobCommand, Unit>
    {
        IJobRepository _repo;
        public UpdateJobCommandHandler(IJobRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(UpdateJobCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateJobCommandValidator(_repo);
            var result = await validator.ValidateAsync(request);
            result.Check();

            await _repo.UpdateAsync(request.MapToJob());
            return Unit.Value;
        }
    }
}
