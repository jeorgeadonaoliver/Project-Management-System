import * as yup from  'yup';
import { departmentSchema, updateDepartmentSchema } from '../../../schemas/department.schema';
import type React from 'react';
import useGetDepartmentById from '../../../hooks/department/query/useGetDepartmentById';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useUpdateDepartment from '../../../hooks/department/query/useUpdateDepartment';
import { useEffect } from 'react';

type DepartmentFormInputs = yup.InferType<typeof updateDepartmentSchema>;

type UpdateDepartmentFormProps = {
    id: number;
    allowEdit: boolean;
    setAllowEdit: (value:boolean) => void;
}

const UpdateDepartmentForm: React.FC<UpdateDepartmentFormProps> = ({id, allowEdit,setAllowEdit}) => {
    const{data: depatments, isLoading, error} = useGetDepartmentById(id);

    const{register, handleSubmit, formState: {errors}, reset} = useForm<DepartmentFormInputs>({
        resolver: yupResolver(departmentSchema),
        defaultValues: {
            departmentId: depatments?.departmentId,
            departmentName: depatments?.departmentName,
            location: depatments?.location
        }
    });

    const {mutate: updateDepartmentMutation} = useUpdateDepartment();
    const onSubmit = async (data: DepartmentFormInputs) => {

        updateDepartmentMutation(data);
        setAllowEdit(false);
    };

    useEffect(() => {
        if(depatments){
            reset(depatments);
        }   
    }, [depatments, reset]);

      return(
    <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {depatments && 
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Team ID */}
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="departmentId" className="block text-sm font-bold text-gray-700">Department ID :</label>
                    <input
                    id="departmentId"
                    {...register('departmentId')}
                    placeholder="Enter Department ID"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    />
                    {errors.departmentId && <p className="text-red-500 text-sm">{errors.departmentId.message}</p>}
                </div>
                 <div className="flex items-center gap-2 w-full">
                    <label htmlFor="departmentName" className="block text-sm font-bold text-gray-700">Department Name :</label>
                    <input
                    id="departmentName"
                    {...register('departmentName')}
                    placeholder="Enter Department Name"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-md"
                    disabled={!allowEdit}
                    />
                    {errors.departmentName && <p className="text-red-500 text-sm">{errors.departmentName.message}</p>}
                </div>
                <div className="flex items-center gap-2 w-full">
                    <label htmlFor="location" className="block text-sm font-bold text-gray-700">Location :</label>
                    <input
                    id="location"
                    {...register('location')}
                    placeholder="Enter Location"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-md"
                    disabled={!allowEdit}
                    />
                    {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                </div>
           
            <div>
                {allowEdit && (
                    <div className="mt-4 flex gap-4">
                    <button
                        type="submit"
                        className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md"
                    >
                        Submit
                    </button>
                     <button
                        type="button"
                        className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md"
                        onClick={() => setAllowEdit(false)}
                    >
                        Cancel
                    </button>
                    </div>
                )}
            </div>
            </form>        
        }
    </>
    );
};

export default UpdateDepartmentForm;