import api from "./api";
import type { Project } from "../types/project";

const getProject = async() : Promise<Project[]> => {
    const response = await api.get<Project[]>('api/Project/Get');
    return response.data;
};

const getProjectById = async(id : number): Promise<Project> => {
    const response = await api.get<Project>(`api/Project/GetById/${id}`);
    return response.data;
};

const createProject = async(projectData: Omit<Project,'projectId'>): Promise<Project> => {
    const response = await api.post<Project>('api/Project/Create', projectData);
    return response.data;
};

const updateProject = async(projectData: Project): Promise<Project> => {
    const response = await api.put<Project>(`api/Project/Update`, projectData);
    return response.data;
};

export { getProject, getProjectById, createProject, updateProject };