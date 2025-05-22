import { messages } from "../utils/validationMessages";
import * as yup from 'yup';

export const CreateDepartmentSchema = yup.object({

    departmentName: yup.string().required(messages.required),
    location: yup.string().required(messages.required),
});

export const updateDepartmentSchema = yup.object({
    departmentId : yup.number().required(messages.required),
    departmentName: yup.string().required(messages.required),
    location: yup.string().required(messages.required),
});

export const departmentSchema = yup.object({
    departmentId : yup.number().required(messages.required),
    departmentName: yup.string().required(messages.required),
    location: yup.string().required(messages.required),
});