import * as yup from 'yup'
import { messages } from '../utils/validationMessages';

export const createProjectSchema = yup.object({
    projectName: yup.string().required(messages.required),
    startDate: yup.string().required(messages.required),
    endDate: yup.string().required(messages.required),
    description: yup.string().required(messages.required),
    teamId: yup.number().required(messages.required),
}); 

export const updateProjectSchema = yup.object({
    projectId: yup.number().required(messages.required),
    projectName: yup.string().required(messages.required),
    startDate: yup.string().required(messages.required),
    endDate: yup.string().required(messages.required),
    description: yup.string().required(messages.required),
    teamId: yup.number().required(messages.required),
}); 