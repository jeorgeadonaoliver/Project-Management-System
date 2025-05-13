using Microsoft.EntityFrameworkCore;
using PMS.Application.Contracts.Persistence;
using PMS.Application.Features.Employee.Query.GetAllEmployee;
using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Persistence.Repositories
{
    public class EmployeeRepository : GenericRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(ProjdbContext context) : base(context) { }

        public async Task<bool> GetAny(string lastname, string firstname)
        {
            return await _context.Set<Employee>().AnyAsync(x => x.LastName == lastname && x.FirstName == firstname );
        }

        public async Task<bool> GetAny(int id)
        {
            return await _context.Set<Employee>().AnyAsync(x => x.EmployeeId == id);
        }

        public async Task<IEnumerable<Employee>> GetAllDetailsAsync() 
        {
            return await _context.Set<Employee>()
                .Include(q => q.Team)
                .Include(x => x.Department)
                .Include(y => y.Role)
                .Include(z => z.Job)
                .ToListAsync();
        }

        public async Task<Employee> GetById(int id)
        {
            return await _context.Set<Employee>()
                .Include(q => q.Team)
                .Include(x => x.Department)
                .Include(y => y.Role)
                .Include(z => z.Job)
                .FirstOrDefaultAsync(x => x.EmployeeId == id);
        }
        public async Task<IEnumerable<Employee>> GetByTeam(int id)
        {
            return await _context.Set<Employee>()
                .Include(q => q.Team)
                .Include(x => x.Department)
                .Include(y => y.Role)
                .Include(z => z.Job)
                .Where(x => x.TeamId == id)
                .ToListAsync();
        }
        public async Task<IEnumerable<Employee>> GetByDepartment(int id)
        {
            return await _context.Set<Employee>()
                .Include(q => q.Team)
                .Include(x => x.Department)
                .Include(y => y.Role)
                .Include(z => z.Job)
                .Where(x => x.DepartmentId == id)
                .ToListAsync();
        }
    }
}
