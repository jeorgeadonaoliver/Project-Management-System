using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS.Application.Features.Project.Command.CreateProject;
using PMS.Application.Features.Project.Command.UpdateProject;
using PMS.Application.Features.Project.Query;
using PMS.Application.Features.Project.Query.GetProjectDetail;
using PMS.Application.Features.Project.Query.GetProjectWithTeam;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        IMediator _mediator;
        public ProjectController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var result = await _mediator.Send(new GetProjectQuery());
            return Ok(result);
        }

        [HttpGet("projectteam")]
        public async Task<IActionResult> GetAll ()
        {
            var result = await _mediator.Send(new GetProjectWithTeamQuery());
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id) 
        {
            var result = await _mediator.Send(new GetProjectDetailQuery(id));
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateProjectCommand command) 
        {
            var result = await _mediator.Send(command);
            return Ok("Creating Project Successful!");
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateProjectCommand command) 
        {
            var result = await _mediator.Send(command);
            return Ok("Updating Project Details Successful.");
        }
    }
}
