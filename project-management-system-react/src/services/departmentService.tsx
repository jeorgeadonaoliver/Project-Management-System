import api from "./api";
import { Department } from "../types/department";

const getDepartments = async() : Promise<Department[]> =>{
    var response = await api.get<Department[]>('api/Department/Get');
    return response.data;
};

const getDepartmentById = async(id): Promise<Department> => {
    var response = await api.get<Department>(`api/Department/GetById/${id}`);
    return response.data;
};

const createDepartment = async(depatmentDate: Omit<Department,'departmentId'>): Promise<Department> => {
    var response = await api.post<Department>('api/Department/Create', depatmentDate);
    return response.data;
}

const updateDepartment = async(departmentData): Promise<Department> => {
    var response = await api.put<Department>(`api/Department/Update`, departmentData);
    return response.data;
}

export { getDepartments, getDepartmentById, createDepartment, updateDepartment };