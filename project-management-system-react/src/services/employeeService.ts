import api from "./api";
import type { Employee } from "../types/employee";

const getEmployee = async(): Promise<Employee[]> => {
    var response = await api.get<Employee[]>('api/Employee/Get');
    return response.data;
}

const getEmployeeById = async(id: number): Promise<Employee> => {
    var response = await api.get<Employee>(`api/Employee/GetById/${id}`);
    return response.data;
}

const getEmployeeByDepTeam = async(id : number): Promise<Employee[]> => {
    var response = await api.get<Employee[]>(`api/Employee/GetByDepTeam/${id}`);
    return response.data;
}

const createEmployee = async(employeeData: Omit<Employee,'employeeId'>): Promise<Employee> => {
    var response = await api.post<Employee>('api/Employee/Create', employeeData);
    return response.data;
}

const updateEmployee = async(employeeData : Employee): Promise<Employee> => {
    var response = await api.put<Employee>(`api/Employee/Update`, employeeData);
    return response.data;
}

export { getEmployee, getEmployeeById, getEmployeeByDepTeam, createEmployee, updateEmployee };