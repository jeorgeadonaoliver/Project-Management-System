import * as yup from 'yup'
import { createProjectSchema } from '../../../schemas/project.schema'
import { yupResolver } from '@hookform/resolvers/yup';
import useCreateProject from '../../../hooks/project/query/useCreateProject';
import 'react-datepicker/dist/react-datepicker.css';
import useGetTeams from '../../../hooks/team/query/useGetTeams';
import DropdownList from '../../common/dropdown';
import FormDatePicker from '../../common/FormDatePicker';
import { useForm } from 'react-hook-form';

type ProjectFormInputs = yup.InferType<typeof createProjectSchema>;

interface AddProjectFormProp{
    onClick: () => void;
}

const AddProjectForm =({onClick}: AddProjectFormProp)=> {
    const{register, handleSubmit, control,formState: {errors}} = useForm<ProjectFormInputs>({
        resolver: yupResolver(createProjectSchema)
    });

    const{data: teams = [], isLoading} = useGetTeams();

    const{mutate: addProjectMutation} = useCreateProject(onClick);
    
    const onSubmit = async (data: ProjectFormInputs) => {
        addProjectMutation(data);
    };

    return(
        <>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

            <input {...register('projectName')} placeholder="Project Name" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.projectName && <p className="text-red-500 text-sm font-bold">{errors.projectName.message}</p>}

            <div>
                <FormDatePicker 
                    name={'startDate'} 
                    placeholder="End Date (yyyy-MM-dd)"
                    control={control}
                    rules={{ required: 'Start date is required' }}
                    isDisabled={false}
                />
                {errors.startDate && (
                    <p className="text-red-500 text-sm font-bold">{errors.startDate.message}</p>
                )}
            </div>
            <div className="w-full">
                <FormDatePicker 
                    name={"endDate"} 
                    control={control} 
                    placeholder="End Date (yyyy-MM-dd)"
                    rules={{ required: 'End date is required' }}
                    isDisabled={false}                    
                />
                {errors.endDate && (
                    <p className="text-red-500 text-sm font-bold">{errors.endDate.message}</p>
                )}
            </div>
            
            <textarea {...register('description')} placeholder="Description" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.description && <p className="text-red-500 text-sm font-bold">{errors.description.message}</p>}

            {/* Team Dropdown */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Team</label>
                <DropdownList 
                        selectProps={{
                        ...register('teamId', { required: 'Team is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:isLoading,
                    }}
                    items={teams} 
                    getOptionKey={(teams)=> teams.teamId ?? 0} 
                    getOptionLabel={(teams) => teams.teamName} 
                />
                {errors.teamId && (
                    <p className="text-red-500 text-sm font-bold">{errors.teamId.message}</p>
                )}
            </div>
            <div className="mt-4 flex gap-4">
                <button type="submit" className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md" >Submit</button>
                <button type="submit" className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md" onClick={onClick}>Cancel</button>
            </div>
        </form>
        </>
    );
};

export default AddProjectForm;