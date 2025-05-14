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
    public class EmployeeProjectRepository : GenericRepository<EmployeeProject>, IEmployeeProjectsRepository
    {

        public EmployeeProjectRepository(ProjdbContext context) : base(context)
        {
            
        }

        public async Task<bool> GetAny(int employeeId, int projectId)
        {
            return await _context.Set<EmployeeProject>().AnyAsync(r => r.EmployeeId == employeeId && r.ProjectId == projectId);
        }

        public async Task<IEnumerable<EmployeeProject>> GetById(int employeeId)
        {
            return await _context.Set<EmployeeProject>()
                .Include(x => x.Employee)
                .Include(x => x.Project)
                .Where(x => x.EmployeeId == employeeId)
                .ToListAsync();
        }

        public async Task<IEnumerable<EmployeeProject>> GetByProjectId(int projectId)
        {
            return await _context.Set<EmployeeProject>()
                .Include(x => x.Employee)
                .Include(x => x.Project)
                .Where(x => x.ProjectId == projectId)
                .ToListAsync();
        }
    }
}
