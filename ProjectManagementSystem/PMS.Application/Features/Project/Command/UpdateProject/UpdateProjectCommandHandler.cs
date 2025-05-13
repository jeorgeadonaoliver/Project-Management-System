using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using PMS.Application.Features.Project.Command.CreateProject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Project.Command.UpdateProject
{
    public class UpdateProjectCommandHandler :IRequestHandler<UpdateProjectCommand, Unit>
    {
        IProjectRepository _repo;
        public UpdateProjectCommandHandler(IProjectRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(UpdateProjectCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateProjectCommandValidator(_repo);
            var result = await validator.ValidateAsync(request, cancellationToken);
            result.Check();

            await _repo.UpdateAsync(request.MapToProject());
            return Unit.Value;
        }
    }
}
