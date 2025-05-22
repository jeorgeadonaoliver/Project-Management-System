import { useForm } from "react-hook-form";
import { CreateDepartmentSchema } from "../../../schemas/department.schema";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import useCreateDepartment from "../../../hooks/department/query/useCreateDepartment";

type TeamFormInputs = yup.InferType<typeof CreateDepartmentSchema>

interface AddDepartmentFormProp{
    onClick : () => void;
}

const AddDepartmentForm = ({onClick}:AddDepartmentFormProp) => {

    const{register, handleSubmit, formState: {errors}} = useForm<TeamFormInputs>({
        resolver: yupResolver(CreateDepartmentSchema)
    });

    const{mutate: addDepartmentMutation} = useCreateDepartment(onClick);

    const onSubmit = async (data: TeamFormInputs) => {
        addDepartmentMutation(data);
    };

    return(
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

            <input {...register('departmentName')} placeholder="Department Name" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.departmentName && <p className="text-red-500 text-sm text-bold">{errors.departmentName.message}</p>}

            <input {...register('location')} placeholder="Location" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.location && <p className="text-red-500 text-sm text-bold">{errors.location.message}</p>}
            <div className="mt-4 flex gap-4">
                <button type="submit" className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md" >Submit</button>
                <button type="submit" className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md" onClick={onClick}>Cancel</button>
            </div>
    </form>
    );
};

export default AddDepartmentForm;