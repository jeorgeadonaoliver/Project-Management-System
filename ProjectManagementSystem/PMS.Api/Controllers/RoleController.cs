using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var resul = await _mediator.Send(new GetRoleQuery());
            return Ok(resul);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id) 
        {
            var result = await _mediator.Send(new GetRoleDetailQuery(id));
            return Ok(result);
        }
    }
}
