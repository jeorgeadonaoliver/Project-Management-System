using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public async Task<IActionResult> Get() {

            var result = await _mediator.Send(new GetDepartmentQuery());
            return Ok(result);
        }


        [HttpGet("id")]
        public async Task<IActionResult> Get(int id)
        {

            var result = await _mediator.Send(new GetDepartmentDetailQuery(id));
            return Ok(result);
        }
    }
}
