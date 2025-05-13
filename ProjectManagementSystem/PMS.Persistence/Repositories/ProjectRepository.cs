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
    public class ProjectRepository : GenericRepository<Project>, IProjectRepository
    {
        public ProjectRepository(ProjdbContext context) : base(context) { }

        public async Task<bool> GetAny(string name)
        {
            return await _context.Set<Project>().AnyAsync(x => x.ProjectName == name);
        }

        public async Task<Project> GetById(int id)
        {
            return await _context.Set<Project>().FirstOrDefaultAsync(x => x.ProjectId == id);
        }
    }
}
