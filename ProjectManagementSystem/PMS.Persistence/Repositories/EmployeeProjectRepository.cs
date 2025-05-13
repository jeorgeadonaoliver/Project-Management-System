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

        public async Task<bool> GetAny(string role)
        {
            return await _context.Set<EmployeeProject>().AnyAsync(r => r.RoleInProject == role);
        }
    }
}
