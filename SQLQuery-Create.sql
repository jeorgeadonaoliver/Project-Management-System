CREATE TABLE Roles (
    RoleID INT PRIMARY KEY IDENTITY(1,1),
    RoleName VARCHAR(100) UNIQUE NOT NULL,
    Description VARCHAR(255) NULL
);

CREATE TABLE Teams (
    TeamID INT PRIMARY KEY IDENTITY(1,1),
    TeamName VARCHAR(100) UNIQUE NOT NULL,
    Description VARCHAR(255) NULL
);

CREATE TABLE Jobs (
    JobID INT PRIMARY KEY IDENTITY(1,1),
    JobTitle VARCHAR(100) UNIQUE NOT NULL,
    MinSalary DECIMAL(10, 2) NULL,
    MaxSalary DECIMAL(10, 2) NULL
);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY IDENTITY(1,1),
    DepartmentName VARCHAR(100) UNIQUE NOT NULL,
    Location VARCHAR(100) NULL
);

CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY IDENTITY(1,1),
    ProjectName VARCHAR(100) UNIQUE NOT NULL,
    StartDate DATE NULL,
    EndDate DATE NULL,
    Description VARCHAR(255) NULL,
    TeamID INT NULL,
    FOREIGN KEY (TeamID) REFERENCES Teams(TeamID)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PhoneNumber VARCHAR(20) NULL,
    HireDate DATE NOT NULL,
    JobID INT NULL,
    DepartmentID INT NULL,
    Salary DECIMAL(10, 2) NULL,
    ManagerID INT NULL,
    TeamID INT NULL,
    RoleID INT NULL,
    FOREIGN KEY (JobID) REFERENCES Jobs(JobID),
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID),
    FOREIGN KEY (ManagerID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (TeamID) REFERENCES Teams(TeamID),
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);

CREATE TABLE EmployeeProjects (
    EmployeeID INT NOT NULL,
    ProjectID INT NOT NULL,
    RoleInProject VARCHAR(100) NULL,
    PRIMARY KEY (EmployeeID, ProjectID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);