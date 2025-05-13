using PMS.Application.Features.Job.Command.UpdateJob;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class UpdateJobCommandExtension
    {
        public static Job MapToJob(this UpdateJobCommand command) {

            return new Job 
            {
                JobTitle = command.JobTitle,
                MaxSalary = command.MaxSalary,
                MinSalary = command.MinSalary,
                JobId = command.JobId
            };
        }
    }
}
