using PMS.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Contracts.Persistence
{
    public interface IEmployeeRepository : IGenericRepository<Employee>
    {
        public Task<Employee> GetById(int id);

        public Task<bool> GetAny(string lastname, string firstname);

        public Task<bool> GetAny(int id);

        public Task<IEnumerable<Employee>> GetByTeam(int teamId);

        public Task<IEnumerable<Employee>> GetByDepartment(int departmentId);

        public Task<IEnumerable<Employee>> GetAllDetailsAsync();
    }
}
