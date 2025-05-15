using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS.Application.Features.Role.Command.CreateRole;
using PMS.Application.Features.Role.Command.UpdateRole;
using PMS.Application.Features.Role.Query;
using PMS.Application.Features.Role.Query.GetRoleDetail;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        IMediator _mediator;
        public RoleController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("Get")]
        public async Task<IActionResult> Get() 
        {
            var resul = await _mediator.Send(new GetRoleQuery());
            return Ok(resul);
        }

        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> GetById(int id) 
        {
            var result = await _mediator.Send(new GetRoleDetailQuery(id));
            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(CreateRoleCommand cmd) 
        {
            var result = await _mediator.Send(cmd);
            return Ok("Creating new role successful!");
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(UpdateRoleCommand cmd)
        {
            var result = await _mediator.Send(cmd);
            return Ok("Role detail has been updated Successfuly.");
        }
    }
}
