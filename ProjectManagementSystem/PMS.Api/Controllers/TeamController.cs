using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS.Application.Features.Team.Command.CreateTeam;
using PMS.Application.Features.Team.Command.UpdateTeam;
using PMS.Application.Features.Team.Query;
using PMS.Application.Features.Team.Query.GetTeamDetail;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        IMediator _mediator;
        public TeamController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var result = await _mediator.Send(new GetTeamsQuery());
            return Ok(result);
        }

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int id) 
        {
            var result = await _mediator.Send(new GetTeamDetailQuery(id));
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateTeamCommand command) 
        {
            var result = await _mediator.Send(command);
            return Ok("Updating Team detail successful!");
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateTeamCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok("Creating New Team successful!");
        }
    }
}
