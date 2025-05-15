using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Contracts.Persistence
{
    public interface IRoleRepository : IGenericRepository<Role>
    {
        Task<Role> GetById(int id);

        Task<bool> GetAny(string name);

        Task<bool> GetAny(int id);
    }
}
