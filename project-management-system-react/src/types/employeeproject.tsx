export interface EmployeeProject{
    id?: number,
    employeeId: number;
    employeeName: string;
    projectId: number;
    projectName: string;
    projectDescription: string;
    roleInProject: string;
}