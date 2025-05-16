import api from "./api";
import { Project } from "../types/project";

const getProject = async() : Promise<Project[]> => {
    var response = await api.get<Project[]>('api/Project/Get');
    return response.data;
};

const getProjectById = async(id): Promise<Project> => {
    var response = await api.get<Project>(`api/Project/GetById/${id}`);
    return response.data;
};

const createProject = async(projectData: Omit<Project,'projectId'>): Promise<Project> => {
    var response = await api.post<Project>('api/Project/Create', projectData);
    return response.data;
};

const updateProject = async(projectData): Promise<Project> => {
    var response = await api.put<Project>(`api/Project/Update`, projectData);
    return response.data;
};

export { getProject, getProjectById, createProject, updateProject };