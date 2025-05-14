using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PMS.Persistence.Models;

public partial class EmployeeProject
{
    public int EmployeeId { get; set; }

    public int ProjectId { get; set; }

    public string? RoleInProject { get; set; }

    public virtual Employee Employee { get; set; } = null!;

    public virtual Project Project { get; set; } = null!;

    public int Id { get; set; }
}
