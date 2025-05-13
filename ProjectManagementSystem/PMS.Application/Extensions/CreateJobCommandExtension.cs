using PMS.Application.Features.Job.Command.CreateJob;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class CreateJobCommandExtension
    {
        public static Job MapToJob(this CreateJobCommand command) 
        {
            return new Job { 
            
                JobTitle = command.JobTitle,
                MaxSalary = command.MaxSalary,
                MinSalary = command.MinSalary
            };
        }
    }
}
