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
    public class DepartmentRepository : GenericRepository<Department> , IDepartmentRepository
    {
        public DepartmentRepository(ProjdbContext context) : base(context)
        {
                        
        }

        public async Task<bool> GetAny(string name)
        {
            return await _context.Set<Department>().AnyAsync(x => x.DepartmentName == name);
        }

        public async Task<bool> GetAny(int id)
        {
            return await _context.Set<Department>().AnyAsync(x => x.DepartmentId == id);
        }

        public async Task<Department> GetById(int id)
        {
            return await _context.Departments.FirstOrDefaultAsync(x => x.DepartmentId == id);
        }
    }
}
