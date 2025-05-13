using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Contracts.Persistence
{
    public interface IEmployeeProjectsRepository : IGenericRepository<EmployeeProject>
    {

        Task<bool> GetAny(string role);
    }
}
