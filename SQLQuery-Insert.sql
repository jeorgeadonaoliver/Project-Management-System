-- Sample Data for Roles
INSERT INTO Roles (RoleName, Description) VALUES
('Software Developer', 'Develops and maintains software applications.'),
('Database Administrator', 'Manages and maintains databases.'),
('Project Manager', 'Leads and oversees projects.'),
('Business Analyst', 'Analyzes business needs and provides solutions.');

-- Sample Data for Teams
INSERT INTO Teams (TeamName, Description) VALUES
('Development Team Alpha', 'Responsible for developing core software features.'),
('Database Team', 'Manages and maintains the company databases.'),
('Project Management Office', 'Oversees all projects within the organization.');

-- Sample Data for Jobs
INSERT INTO Jobs (JobTitle, MinSalary, MaxSalary) VALUES
('Software Engineer', 60000.00, 100000.00),
('Database Admin', 70000.00, 110000.00),
('Project Manager', 80000.00, 130000.00),
('Business Analyst', 65000.00, 95000.00);

-- Sample Data for Departments
INSERT INTO Departments (DepartmentName, Location) VALUES
('Human Resources', 'Manila'),
('Engineering', 'Cebu'),
('Marketing', 'Davao'),
('Finance', 'Manila');

-- Sample Data for Projects
INSERT INTO Projects (ProjectName, StartDate, EndDate, Description, TeamID) VALUES
('Project Phoenix', '2025-06-01', '2025-12-31', 'Major system overhaul.', 1),
('Data Migration Initiative', '2025-07-15', '2026-03-30', 'Migrating data to a new platform.', 2),
('New Website Development', '2025-05-15', '2025-09-30', 'Building the company\s new online presence.', 1);

-- Sample Data for Employees
INSERT INTO Employees (FirstName, LastName, Email, PhoneNumber, HireDate, JobID, DepartmentID, Salary, ManagerID, TeamID, RoleID) VALUES
('John', 'Doe', 'john.doe@example.com', '09123456789', '2023-01-15', 3, 1, 85000.00, NULL, 3, 3), -- Project Manager in HR
('Jane', 'Smith', 'jane.smith@example.com', '09876543210', '2023-02-20', 1, 2, 90000.00, 1, 1, 1),  -- Software Developer in Development Team Alpha
('Peter', 'Jones', 'peter.jones@example.com', '09112233445', '2023-03-10', 4, 3, 70000.00, 1, 1, 4),  -- Business Analyst in Development Team Alpha
('Alice', 'Brown', 'alice.brown@example.com', '09998877665', '2023-04-01', 2, 4, 100000.00, 2, 2, 2), -- Database Admin in Database Team
('Ricardo', 'Santos', 'ricardo.santos@example.com', '09771122334', '2024-08-10', 1, 2, 95000.00, 2, 1, 1); -- Software Developer in Development Team Alpha

-- Sample Data for EmployeeProjects
INSERT INTO EmployeeProjects (EmployeeID, ProjectID, RoleInProject) VALUES
(2, 1, 'Lead Developer'),
(5, 1, 'Developer'),
(4, 2, 'Database Architect'),
(1, 1, 'Project Manager'),
(3, 3, 'Requirements Analyst'),
(2, 3, 'Developer');