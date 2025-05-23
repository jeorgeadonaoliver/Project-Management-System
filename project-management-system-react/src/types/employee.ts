export interface Employee{

    employeeId?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    hireDate: string | null;
    jobId: number;
    jobName: string;
    departmentId: number;
    departmentName: string;
    salary: number;
    managerId: number | null;
    teamId: number;
    teamName: string;
    roleId: number;
    roleName: string;
}

export interface CreateEmployee{

    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    hireDate: string;
    jobId: number;
    departmentId: number;
    salary: number;
    managerId: number;
    teamId: number;
    roleId: number;
}