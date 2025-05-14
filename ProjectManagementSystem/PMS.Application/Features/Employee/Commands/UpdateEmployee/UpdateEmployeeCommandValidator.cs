using FluentValidation;
using MediatR;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Commands.UpdateEmployee
{
    public class UpdateEmployeeCommandValidator : AbstractValidator<UpdateEmployeeCommand>
    {
        IEmployeeRepository _repo;
        public UpdateEmployeeCommandValidator(IEmployeeRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("Empoyee Detail must not be NULL.");

            RuleFor(x => x.EmployeeId)
                .NotNull()
                .WithMessage("Employee Id must not be NULL")
                .MustAsync(IsEmployeeExist)
                .WithMessage("Employee does NOT EXIST.");
        }

        private async Task<bool> IsEmployeeExist(int id, CancellationToken cancellationToken) 
        {
            return await _repo.GetAny(id);
        }
    }
}
