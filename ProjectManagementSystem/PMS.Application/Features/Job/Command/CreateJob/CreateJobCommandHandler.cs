using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;

namespace PMS.Application.Features.Job.Command.CreateJob
{
    public class CreateJobCommandHandler : IRequestHandler<CreateJobCommand, Unit>
    {
        IJobRepository _repo;
        public CreateJobCommandHandler(IJobRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(CreateJobCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateJobCommandValidator(_repo);
            var result = await validator.ValidateAsync(request);
            result.Check();

            await _repo.CreateAsync(request.MapToJob());
            return Unit.Value;
        }
    }
}
