using Microsoft.EntityFrameworkCore;
using PMS.Application.Contracts.Persistence;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Persistence.Repositories
{
    public class JobRepository : GenericRepository<Job>, IJobRepository
    {
        public JobRepository(ProjdbContext context) : base(context) { }

        public async Task<bool> GetAny(string title)
        {
            return await _context.Set<Job>().AnyAsync(c => c.JobTitle == title);
        }

        public async Task<bool> GetAny(int id)
        {
            return await _context.Set<Job>().AnyAsync(c => c.JobId == id);
        }

        public async Task<Job> GetById(int id)
        {
            return await _context.Set<Job>().FirstOrDefaultAsync(x => x.JobId == id);
        }
    }
}
