using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Command.CreateDepartment
{
    public class CreateDepartmentCommandHandler : IRequestHandler<CreateDepartmentCommand, Unit>
    {
        IDepartmentRepository _repo;

        public CreateDepartmentCommandHandler(IDepartmentRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(CreateDepartmentCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateDepartmentCommandValidator(_repo);
            var result = await validator.ValidateAsync(request);
            result.Check();

            await _repo.CreateAsync(request.MapToDepartment());

            return Unit.Value;
        }
    }
}
