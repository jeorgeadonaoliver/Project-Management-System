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
    public class RoleRepository : GenericRepository<Role>, IRoleRepository
    {
        public RoleRepository(ProjdbContext context) : base(context) { }

        public async Task<bool> GetAny(string name)
        {
            return await _context.Set<Role>().AnyAsync(x => x.RoleName == name);
        }

        public async Task<Role> GetById(int id)
        {
            return await _context.Set<Role>().FirstOrDefaultAsync(x => x.RoleId == id);
        }
    }
}
