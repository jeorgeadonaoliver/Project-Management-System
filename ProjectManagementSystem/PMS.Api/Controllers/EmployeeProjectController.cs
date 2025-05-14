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

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var result = await _mediator.Send(new GetEmployeeProjectQuery());
            return Ok(result);
        }

        [HttpGet("employee/{employeeId}")]
        public async Task<IActionResult> Get(int employeeId) 
        {
            var result = await _mediator.Send(new GetEmployeeProjectByEmployeeQuery(employeeId));
            return Ok(result);
        }

        [HttpGet("project/{projectId}")]
        public async Task<IActionResult> GetProject(int projectId)
        {
            var result = await _mediator.Send(new GetEmployeeProjectByProjectQuery(projectId));
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateEmployeeProjectCommand cmd) 
        {
            var result = await _mediator.Send(cmd);
            return Ok("EmployeeProject Detail has been Updated successfully.");
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateEmployeeProjectCommand cmd)
        {
            var result = await _mediator.Send(cmd);
            return Ok("Creating EmployeeProject has been Successful.");
        }
    }
}
