import api from "./api";
import type { EmployeeProject } from "../types/employeeproject";

const getEmployeeProject = async(): Promise<EmployeeProject[]> => {
    var response = await api.get<EmployeeProject[]>('api/EmployeeProject/Get');
    return response.data;
};

const getEmployeeProjectByEmployeeId = async(id: number): Promise<EmployeeProject> => {
    var response = await api.get<EmployeeProject>(`api/EmployeeProject/GetByEmpoyeeId/${id}`);
    return response.data;
}

const getEmployeeProjectByProjectId = async(id : number): Promise<EmployeeProject> => {
    var response = await api.get<EmployeeProject>(`api/EmployeeProject/GetByProjectId/${id}`);
    return response.data;
};

const createEmployeeProject = async(employeeProjectData: Omit<EmployeeProject,'employeeProjectId'>): Promise<EmployeeProject> => {
    var response = await api.post<EmployeeProject>('api/EmployeeProject/Create', employeeProjectData);
    return response.data;
}

const updateEmployeeProject = async(employeeProjectData : EmployeeProject): Promise<EmployeeProject> => {
    var response = await api.put<EmployeeProject>(`api/EmployeeProject/Update`, employeeProjectData);
    return response.data;
}

export { getEmployeeProject, getEmployeeProjectByEmployeeId, getEmployeeProjectByProjectId, createEmployeeProject, updateEmployeeProject };