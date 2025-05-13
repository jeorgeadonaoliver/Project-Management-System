using FluentValidation;
using PMS.Application.Contracts.Persistence;

namespace PMS.Application.Features.Employee.Query.GetEmployeeDetails
{
    public class GetEmployeeDetailsQueryValidator : AbstractValidator<GetEmployeeDetailsQuery>
    {
        private readonly IEmployeeRepository _repo;

        public GetEmployeeDetailsQueryValidator(IEmployeeRepository repo)
        {
            this._repo = repo;

            RuleFor(p => p.id)
                .NotNull()
                .WithMessage("Employee Must NOT be null.")
                .MustAsync(IsEmployeeIdExist)
                .WithMessage("Employee Id NOT Exist");
        }

        private async Task<bool> IsEmployeeIdExist(int id, CancellationToken cancellationToken) {

            return await _repo.GetAny(id);
        }
    }
}
