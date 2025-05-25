export interface Employee{

    employeeId: number;
    firstName: string;
    lastName: string;
    fullname: string;
    email: string;
    phoneNumber: string;
    hireDate: string;
    jobId: number;
    jobName: string;
    departmentId: number;
    departmentName: string;
    salary: number;
    managerId: number;
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

export interface UpdateEmployee{

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