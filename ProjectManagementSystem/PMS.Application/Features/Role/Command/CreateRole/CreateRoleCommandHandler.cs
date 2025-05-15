using MediatR;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Role.Command.CreateRole
{
    public class CreateRoleCommandHandler : IRequestHandler<CreateRoleCommand, Unit>
    {
        IRoleRepository _repo;
        public CreateRoleCommandHandler(IRoleRepository repo)
        {
            _repo = repo;
        }

        public async Task<Unit> Handle(CreateRoleCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateRoleCommandValidator(_repo);
            var result = await validator.ValidateAsync(request, cancellationToken);
            result.Check();

            await _repo.CreateAsync(request.MapToRole());
            return Unit.Value;
        }
    }
}
