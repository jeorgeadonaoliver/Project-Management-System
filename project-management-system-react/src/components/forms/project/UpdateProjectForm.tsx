import * as yup from 'yup';
import { updateProjectSchema } from '../../../schemas/project.schema';
import useGetProjectById from '../../../hooks/project/query/useGetProjectById';
import { yupResolver } from '@hookform/resolvers/yup';
import useUpdateProject from '../../../hooks/project/query/useUpdateProject';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormDatePicker from '../../common/FormDatePicker';
import DropdownList from '../../common/dropdown';
import useGetTeams from '../../../hooks/team/query/useGetTeams';

type ProjectUpdateFormInputs = yup.InferType<typeof updateProjectSchema>;

type UpdateProjectFormProps = {
    id: number;
    allowEdit: boolean;
    setAllowEdit: (value: boolean) => void;
}

const UpdateProjectForm: React.FC<UpdateProjectFormProps> = ({id, allowEdit, setAllowEdit }) =>{
    const{data: projects, isLoading, error} = useGetProjectById(id);
    const{data: teams = []} = useGetTeams();

    const{register, handleSubmit, control, formState: {errors},reset} = useForm<ProjectUpdateFormInputs>({
            resolver: yupResolver(updateProjectSchema),
            defaultValues:{
                projectId: projects?.projectId,
                projectName: projects?.projectName,
                startDate: projects?.startDate,
                endDate: projects?.endDate,
                description: projects?.description,
                teamId: projects?.teamId
            }
    });

    const {mutate: updateProjectMutation} = useUpdateProject();
    const onSubmit = async (data: ProjectUpdateFormInputs) => {
        updateProjectMutation(data);
        setAllowEdit(false);
    }

    useEffect(() => {
            if(projects){
                reset(projects);
            }   
    }, [projects, reset]);
    
    return(
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {projects &&
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="projectId" className="block text-sm font-bold text-gray-700">Project ID :</label>
                    <input
                    id="projectId"
                    {...register('projectId')}
                    placeholder="Enter Project ID"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    />
                    {errors.projectId && <p className="text-red-500 text-sm">{errors.projectId.message}</p>}
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="description" className="block text-sm font-bold text-gray-700">Description :</label>
                    <textarea
                        id="description"
                        {...register('description')}
                        placeholder="Enter description"
                        className="flex-1 w-full pt-7 p-2 border border-gray-300 rounded-md "
                        disabled={!allowEdit}
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label className="block text-sm font-bold text-gray-700">Start Date :</label>
                    <FormDatePicker 
                        name={'startDate'} 
                        control={control} 
                        rules={{ required: 'Start date is required' }}
                        isDisabled={!allowEdit}  
                    />
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label className="block text-sm font-bold text-gray-700">End Date :</label>
                    <FormDatePicker 
                        name={'endDate'} 
                        control={control} 
                        rules={{ required: 'End date is required' }}
                        isDisabled={!allowEdit}   
                    />
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label className="block text-sm font-bold text-gray-700">Team Name :</label>
                    <DropdownList 
                        selectProps={{
                        ...register('teamId', { required: 'Team is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:!allowEdit
                        }}
                        placeHolder='Select Team'
                        items={teams} 
                        getOptionKey={(teams) => teams.teamId ?? 0} 
                        getOptionLabel={(teams) => teams.teamName}                    
                    />
                </div>
                <div className="flex items-center gap-2 w-auto">
                    
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

export default UpdateProjectForm;