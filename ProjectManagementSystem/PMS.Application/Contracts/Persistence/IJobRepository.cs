using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Contracts.Persistence
{
    public interface IJobRepository : IGenericRepository<Job>
    {
        Task<Job> GetById(int id);

        Task<bool> GetAny(string title);

        Task<bool> GetAny(int id);
    }
}
