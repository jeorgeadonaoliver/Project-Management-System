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
    public class TeamRepository : GenericRepository<Team>, ITeamRepository
    {
        public TeamRepository(ProjdbContext context) : base(context) { }

        public async Task<bool> GetAny(string name)
        {
            return await _context.Set<Team>().AnyAsync(x => x.TeamName == name);
        }

        public async Task<bool> GetAny(int id)
        {
            return await _context.Set<Team>().AnyAsync(x => x.TeamId == id);
        }

        public async Task<Team> GetById(int id)
        {
            return await _context.Set<Team>().FirstOrDefaultAsync(x => x.TeamId == id);
        }
    }
}
