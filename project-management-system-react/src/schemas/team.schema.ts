import * as yup from 'yup'
import {messages} from './../utils/validationMessages'

export const teamSchema = yup.object({
    teamName: yup.string().required( messages.required),
    description: yup.string().required(messages.required)

});

export const updateTeamSchema = yup.object({
    teamId: yup.number(),
    teamName: yup.string().required( messages.required),
    description: yup.string().required(messages.required)

});