import api from "./api";
import type { Role } from "../types/role";

const getRole = async() : Promise<Role[]> => {
    const response = await api.get<Role[]>('api/Role/Get');
    return response.data;
}

const getRoleById = async(id : number): Promise<Role> => {
    const response = await api.get<Role>(`api/Role/GetById/${id}`);
    return response.data;
}

const createRole = async(roleData: Omit<Role,'roleId'>): Promise<Role> => {
    const response = await api.post<Role>('api/Role/Create', roleData);
    return response.data;
}

const updateRole = async(roleData: Role): Promise<Role> => {
    const response = await api.put<Role>(`api/Role/Update`, roleData);
    return response.data;
}

export{ getRole, getRoleById, createRole, updateRole };