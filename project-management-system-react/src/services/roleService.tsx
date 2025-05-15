import api from "./api";
import { Role } from "../types/role";

const getRole = async() : Promise<Role[]> => {
    var response = await api.get<Role[]>('api/Role/Get');
    return response.data;
}

const getRoleById = async(id): Promise<Role> => {
    var response = await api.get<Role>(`api/Role/GetById/${id}`);
    return response.data;
}

const createRole = async(roleData: Omit<Role,'roleId'>): Promise<Role> => {
    var response = await api.post<Role>('api/Role/Create', roleData);
    return response.data;
}

const updateRole = async(roleData): Promise<Role> => {
    var response = await api.put<Role>(`api/Role/Update`, roleData);
    return response.data;
}

export{ getRole, getRoleById, createRole, updateRole };