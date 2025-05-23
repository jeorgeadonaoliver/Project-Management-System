import api from "./api";
import type { CreateEmployee, Employee } from "../types/employee";

const getEmployee = async(): Promise<Employee[]> => {
    const response = await api.get<Employee[]>('api/Employee/Get');
    return response.data;
}

const getEmployeeById = async(id: number): Promise<Employee> => {
    const response = await api.get<Employee>(`api/Employee/GetById/${id}`);
    return response.data;
}

const getEmployeeByDepTeam = async(id : number): Promise<Employee[]> => {
    const response = await api.get<Employee[]>(`api/Employee/GetByDepTeam/${id}`);
    return response.data;
}

const createEmployee = async(employeeData: Omit<CreateEmployee,'employeeId'>): Promise<CreateEmployee> => {
    const response = await api.post<CreateEmployee>('api/Employee/Create', employeeData);
    return response.data;
}

const updateEmployee = async(employeeData : Employee): Promise<Employee> => {
    const response = await api.put<Employee>(`api/Employee/Update`, employeeData);
    return response.data;
}

export { getEmployee, getEmployeeById, getEmployeeByDepTeam, createEmployee, updateEmployee };