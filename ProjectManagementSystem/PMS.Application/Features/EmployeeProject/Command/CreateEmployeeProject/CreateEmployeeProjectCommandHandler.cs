using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.EmployeeProject.Command.CreateEmployeeProject
{
    public class CreateEmployeeProjectCommandHandler : IRequestHandler<CreateEmployeeProjectCommand, Unit>
    {
        IEmployeeProjectsRepository _repo;
        public CreateEmployeeProjectCommandHandler(IEmployeeProjectsRepository repo)
        {
            _repo = repo;
        }
        public async Task<Unit> Handle(CreateEmployeeProjectCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateEmployeeProjectCommandValidator(_repo);
            var result = await validator.ValidateAsync(request, cancellationToken);
            result.Check();

            await _repo.CreateAsync(request.MapToEmployeeProject());
            return Unit.Value;
        }
    }
}
