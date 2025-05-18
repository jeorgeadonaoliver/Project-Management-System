import api from "./api";
import type { Job } from "../types/job";

const getJob = async(): Promise<Job[]> => {
    const response = await api.get<Job[]>('api/Job/Get');
    return response.data;
};

const getJobById = async(id: number): Promise<Job> => {
    const response = await api.get<Job>(`api/Job/GetById/${id}`);
    return response.data;
}

const createJob = async(jobData: Omit<Job,'jobId'>): Promise<Job> => {
    const response = await api.post<Job>('api/Job/Create', jobData);
    return response.data;
}

const updateJob = async(jobData:Job): Promise<Job> => {
    const response = await api.put<Job>(`api/Job/Update`, jobData);
    return response.data;
}

export { getJob, getJobById, createJob, updateJob };