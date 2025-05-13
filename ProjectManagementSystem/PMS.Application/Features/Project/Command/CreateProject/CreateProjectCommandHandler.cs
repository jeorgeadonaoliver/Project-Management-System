using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Command.CreateProject
{
    public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, Unit>
    {
        IProjectRepository _repo;
        public CreateProjectCommandHandler(IProjectRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateProjectCommandValidator(_repo);
            var result = await validator.ValidateAsync(request);
            result.Check();

            await _repo.CreateAsync(request.MapToJob());
            return Unit.Value;
        }
    }
}
