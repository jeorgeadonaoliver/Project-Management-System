using MediatR;

namespace PMS.Application.Features.Employee.Query.GetAllEmployee
{
    public record GetAllEmployeeQuery : IRequest<List<GetEmployeeQueryDto>>;

}
