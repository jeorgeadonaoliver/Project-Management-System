using FluentValidation;
using PMS.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Employee.Commands.CreateEmployee
{
    public class CreateEmployeeCommandValidator : AbstractValidator<CreateEmployeeCommand>
    {
        IEmployeeRepository _repo;
        public CreateEmployeeCommandValidator(IEmployeeRepository repo)
        {
            _repo = repo;

            RuleFor(x => x)
                .NotNull()
                .WithMessage("Employee Details must not be NULL.")
                .MustAsync(IsEmployeeExist)
                .WithMessage("Employee already EXIST.");

            RuleFor(x => x.FirstName)
                .NotNull()
                .WithMessage("Employee Firstname must not be NULL.");

            RuleFor(x => x.LastName)
                .NotNull()
                .WithMessage("Employee Lastname must not be NULL") ;
        }

        private async Task<bool> IsEmployeeExist(CreateEmployeeCommand cmd, CancellationToken cancellationToken) 
        {
            return !await _repo.GetAny(cmd.LastName, cmd.FirstName);
        }
    }
}
