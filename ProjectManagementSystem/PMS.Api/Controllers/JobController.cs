using MediatR;
using Microsoft.AspNetCore.Mvc;
using PMS.Application.Features.Job.Command.CreateJob;
using PMS.Application.Features.Job.Command.UpdateJob;
using PMS.Application.Features.Job.Query;
using PMS.Application.Features.Job.Query.GetJobDetail;

namespace PMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        IMediator _mediator;

        public JobController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var result = await _mediator.Send(new GetJobsQuery());
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id) 
        {
            var result = await _mediator.Send(new GetJobDetailQuery(id));
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateJobCommand cmd) 
        {
            var result = await _mediator.Send(cmd);
            return Ok("Updating Job details Successful");
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateJobCommand cmd)
        {
            var result = await _mediator.Send(cmd);
            return Ok("Creating new Job Successful!");
        }
    }
}
