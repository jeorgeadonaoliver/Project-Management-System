using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Command.UpdateDepartment
{
    public class UpdateDepartmentCommandValidator : AbstractValidator<UpdateDepartmentCommand>
    {
        IDepartmentRepository _repo;
        public UpdateDepartmentCommandValidator(IDepartmentRepository repo)
        {
            this._repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("Update Department Command must not be null.");

            RuleFor(x => x.DepartmentId)
                .NotNull()
                .WithMessage("Department ID must not be null")
                .MustAsync(IsDepartmentExist)
                .WithMessage("Department Id Does NOT Exist");

            RuleFor(x => x.DepartmentName)
                .NotNull()
                .WithMessage("Department Name is Required");
        }

        private async Task<bool> IsDepartmentExist(int id, CancellationToken cancellationToken)
        {
            return await _repo.GetAny(id);
        }

    }
}
