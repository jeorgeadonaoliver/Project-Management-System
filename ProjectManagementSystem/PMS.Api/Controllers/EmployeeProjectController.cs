using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS.Application.Features.EmployeeProject.Command.CreateEmployeeProject;
using PMS.Application.Features.EmployeeProject.Command.UpdateEmployeeProject;
using PMS.Application.Features.EmployeeProject.Query;
using PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByEmployee;
using PMS.Application.Features.EmployeeProject.Query.GetEmployeeProjectByProject;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeProjectController : ControllerBase
    {
        IMediator _mediator;

        public EmployeeProjectController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("Get")]
        public async Task<IActionResult> Get() 
        {
            var result = await _mediator.Send(new GetEmployeeProjectQuery());
            return Ok(result);
        }

        [HttpGet("GetByEmployeeId/{id}")]
        public async Task<IActionResult> Get(int id) 
        {
            var result = await _mediator.Send(new GetEmployeeProjectByEmployeeQuery(id));
            return Ok(result);
        }

        [HttpGet("GetByProjectId/{id}")]
        public async Task<IActionResult> GetProject(int id)
        {
            var result = await _mediator.Send(new GetEmployeeProjectByProjectQuery(id));
            return Ok(result);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(UpdateEmployeeProjectCommand cmd) 
        {
            var result = await _mediator.Send(cmd);
            return Ok("EmployeeProject Detail has been Updated successfully.");
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(CreateEmployeeProjectCommand cmd)
        {
            var result = await _mediator.Send(cmd);
            return Ok("Creating EmployeeProject has been Successful.");
        }
    }
}
