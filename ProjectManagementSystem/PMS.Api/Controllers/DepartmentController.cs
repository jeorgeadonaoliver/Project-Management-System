using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS.Application.Features.Department.Command.CreateDepartment;
using PMS.Application.Features.Department.Command.UpdateDepartment;
using PMS.Application.Features.Department.Query;
using PMS.Application.Features.Department.Query.GetDepartmentDetail;
using System.Threading.Tasks;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        IMediator _mediator;
        public DepartmentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("Get")]
        public async Task<IActionResult> Get() {

            var result = await _mediator.Send(new GetDepartmentQuery());
            return Ok(result);
        }


        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> Get(int id)
        {

            var result = await _mediator.Send(new GetDepartmentDetailQuery(id));
            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(CreateDepartmentCommand cmd) 
        {
            await _mediator.Send(cmd);
            return Ok("New Department has been Added!");
        }


        [HttpPut("Update")]
        public async Task<IActionResult> Update(UpdateDepartmentCommand cmd)
        {
            await _mediator.Send(cmd);
            return Ok("Department detail has been Updated!");
        }
    }
}
