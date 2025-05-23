import * as yup from 'yup'
import { messages } from '../utils/validationMessages';

export const createEmployeeSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup.string().default(""),
  hireDate: yup.string().default(""),
  jobId: yup.number().required('Job ID is required'),
  departmentId: yup.number().required('Department ID is required'),
  salary: yup.number().required('Salary is required'),
  managerId: yup.number().default(0),
  teamId: yup.number().required('Team ID is required'),
  roleId: yup.number().required('Role ID is required'),
});



export const updateEmployeeSchema = yup.object({
    employeeId: yup.number().required(messages.required),
    firstName: yup.string().required(messages.required),
    lastName: yup.string().required(messages.required),
    email: yup.string().email(messages.invalidEmail).required(),
    phoneNumber: yup.string().nullable(),
    hireDate: yup.string(),
    jobId: yup.number().required(messages.required),
    departmentId: yup.number().required(messages.required),
    salary: yup.number().required(messages.required),
    managerId: yup.number().nullable().optional(),
    teamId: yup.number().required(messages.required),
    roleId: yup.number().required(messages.required)
});