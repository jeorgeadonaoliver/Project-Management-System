using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS.Api.Model;
using PMS.Application.Features.Employee.Commands.CreateEmployee;
using PMS.Application.Features.Employee.Commands.UpdateEmployee;
using PMS.Application.Features.Employee.Query.GetAllEmployee;
using PMS.Application.Features.Employee.Query.GetEmployeeByTeam;
using PMS.Application.Features.Employee.Query.GetEmployeeDetails;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IMediator _mediator;
        public EmployeeController(IMediator mediator)
        {
            this._mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _mediator.Send(new GetAllEmployeeQuery());
            return Ok(data);
        }

        [HttpPost("search")]
        public async Task<IActionResult> GetAllByDepartmentOrTeam([FromBody] EmployeeRequestModel request)
        {
            var data = await _mediator.Send(new GetEmployeeByDepartmentOrTeamQuery(request.DepartmentOrTem,request.Id));
            return Ok(data);
        }

        [HttpGet("employeeId")]
        public async Task<IActionResult> GetAllById(int id)
        {
            var data = await _mediator.Send(new GetEmployeeDetailsQuery(id));
            return Ok(data);
        }

        [HttpPost("addemployee")]
        public async Task<IActionResult> Create([FromBody]CreateEmployeeCommand cmd)
        {
            var data = await _mediator.Send(cmd);
            return Ok("Employee has been Successfully ADDED.");
        }

        [HttpPut("updateemployee")]
        public async Task<IActionResult> Update([FromBody]UpdateEmployeeCommand cmd)
        {
            var data = await _mediator.Send(cmd);
            return Ok("Employee Details has been updated SUCCESSFULLY.");
        }
    }
}
