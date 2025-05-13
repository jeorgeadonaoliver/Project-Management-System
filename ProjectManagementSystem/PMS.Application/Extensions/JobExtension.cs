using PMS.Application.Features.Job.Query;
using PMS.Application.Features.Job.Query.GetJobDetail;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class JobExtension
    {
        public static GetJobsQueryDto MapToGetJobsQueryDto(this Job job) 
        {
            return new GetJobsQueryDto
            {
                JobId = job.JobId,
                JobTitle = job.JobTitle,
                MaxSalary = job.MaxSalary,
                MinSalary = job.MinSalary
            };
        }

        public static GetJobDetailQueryDto MapToGetJobDetailQueryDto(this Job job) 
        {
            return new GetJobDetailQueryDto 
            {
                JobId = job.JobId,
                JobTitle = job.JobTitle,
                MaxSalary = job.MaxSalary,
                MinSalary = job.MinSalary
            };
        }
    }
}
