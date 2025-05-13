using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Command.UpdateDepartment
{
    public class UpdateDepartmentCommandHandler : IRequestHandler<UpdateDepartmentCommand, Unit>
    {
        IDepartmentRepository _repo;

        public UpdateDepartmentCommandHandler(IDepartmentRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(UpdateDepartmentCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateDepartmentCommandValidator(_repo);
            var result = await validator.ValidateAsync(request);
            result.Check();

            await _repo.UpdateAsync(request.MapTpDepartment());
            return Unit.Value;
        }
    }
}
