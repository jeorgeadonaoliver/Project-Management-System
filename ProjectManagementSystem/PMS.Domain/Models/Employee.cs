using System;
using System.Collections.Generic;

namespace PMS.Persistence.Models;

public partial class Employee
{
    public int EmployeeId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public DateOnly HireDate { get; set; }

    public int? JobId { get; set; }

    public int? DepartmentId { get; set; }

    public decimal? Salary { get; set; }

    public int? ManagerId { get; set; }

    public int? TeamId { get; set; }

    public int? RoleId { get; set; }

    public virtual Department? Department { get; set; }

    public virtual ICollection<EmployeeProject> EmployeeProjects { get; set; } = new List<EmployeeProject>();

    public virtual ICollection<Employee> InverseManager { get; set; } = new List<Employee>();

    public virtual Job? Job { get; set; }

    public virtual Employee? Manager { get; set; }

    public virtual Role? Role { get; set; }

    public virtual Team? Team { get; set; }
}
