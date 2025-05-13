using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Department.Command.CreateDepartment
{
    public class CreateDepartmentCommandValidator : AbstractValidator<CreateDepartmentCommand>
    {
        IDepartmentRepository _repo;
        public CreateDepartmentCommandValidator(IDepartmentRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("CreateDepartmentCommand is null.");

            RuleFor(x => x.DepartmentName)
                .NotNull()
                .WithMessage("Department name must not be null.")
                .MustAsync(IsDepartmentExist)
                .WithMessage("Department already Exist.");
                
        }

        private async Task<bool> IsDepartmentExist(string name, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(name);
        }
    }
}
