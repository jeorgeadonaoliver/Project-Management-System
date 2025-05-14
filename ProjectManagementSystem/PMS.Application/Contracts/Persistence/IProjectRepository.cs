using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Contracts.Persistence
{
    public interface IProjectRepository : IGenericRepository<Project>
    {
        public Task<IEnumerable<Project>> GetAllDetails();
        public Task<Project> GetById(int id);

        public Task<bool> GetAny(string name);

        public Task<bool> GetAny(int id);
    }
}
