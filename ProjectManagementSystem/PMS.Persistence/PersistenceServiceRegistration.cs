using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PMS.Application.Contracts.Persistence;
using PMS.Persistence.Models;
using PMS.Persistence.Repositories;

namespace PMS.Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection AddPersistenceService(this IServiceCollection services,
           IConfiguration configuration)
        {
            services.AddDbContext<ProjdbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("ProjdbConnectionString"));
            });

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            services.AddScoped<IEmployeeProjectsRepository, EmployeeProjectRepository>();
            services.AddScoped<IJobRepository, JobRepository>();
            services.AddScoped<IProjectRepository, ProjectRepository>();
            services.AddScoped<IRoleRepository, RoleRepository>();
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();

            return services;
        }
    }
}
