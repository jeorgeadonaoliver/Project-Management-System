using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Features.Job.Command.UpdateJob
{
    public class UpdateJobCommand : IRequest<Unit>
    {
        public int JobId { get; set; }

        public string JobTitle { get; set; } = null!;

        public decimal? MinSalary { get; set; }

        public decimal? MaxSalary { get; set; }
    }
}
