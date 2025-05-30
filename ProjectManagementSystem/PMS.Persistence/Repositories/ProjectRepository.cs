﻿using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<Project>> GetAllDetails() 
        {
            return await _context.Set<Project>()
                .Include(x => x.Team)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<bool> GetAny(string name)
        {
            return await _context.Set<Project>().AnyAsync(x => x.ProjectName == name);
        }

        public async Task<bool> GetAny(int id)
        {
            return await _context.Set<Project>().AnyAsync(x => x.ProjectId == id);
        }

        public async Task<Project> GetById(int id)
        {
            return await _context.Set<Project>()
                .Include(x => x.Team)
                .FirstOrDefaultAsync(x => x.ProjectId == id);
        }
    }
}
