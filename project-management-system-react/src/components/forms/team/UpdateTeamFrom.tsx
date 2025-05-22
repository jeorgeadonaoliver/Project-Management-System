import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { teamSchema, updateTeamSchema } from '../../../schemas/team.schema';

import useGetTeamById from '../../../hooks/team/query/useGetTeamById';
import type React from 'react';
import { useEffect } from 'react';

import useUpdateTeam from '../../../hooks/team/query/useUpdateTeam';


type TeamFromInputs = yup.InferType<typeof updateTeamSchema>

type UpdateTeamFormProps = {
  id: number;
  allowEdit: boolean;
  setAllowEdit: (value: boolean) => void;
};

const UpdateTeamFrom: React.FC<UpdateTeamFormProps> = ({id, allowEdit, setAllowEdit}) => {

    const{data: teams, isLoading, error} = useGetTeamById(id);

    const{register, handleSubmit, formState: {errors}, reset} = useForm<TeamFromInputs>({
        resolver: yupResolver(teamSchema),
        defaultValues: {
            teamId: teams?.teamId,
            teamName: teams?.teamName,
            description: teams?.description
        }
    });

    const {mutate: updateTeamMutation} = useUpdateTeam();

    const onSubmit = async (data: TeamFromInputs) => {

        //mutate(data);
        updateTeamMutation(data);
        setAllowEdit(false);
    };

    useEffect(() => {
        if(teams){
            reset(teams);
        }   
    }, [teams, reset]);

    return(
    <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {teams && 
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Team ID */}
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="teamId" className="block text-sm font-bold text-gray-700">Team ID :</label>
                    <input
                    id="teamId"
                    {...register('teamId')}
                    placeholder="Enter Team ID"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    />
                    {errors.teamId && <p className="text-red-500 text-sm">{errors.teamId.message}</p>}
                </div>
                 <div className="flex items-center gap-2 w-full">
                    <label htmlFor="teamName" className="block text-sm font-bold text-gray-700">Team Name :</label>
                    <input
                    id="teamName"
                    {...register('teamName')}
                    placeholder="Enter Team Name"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-md"
                    disabled={!allowEdit}
                    />
                    {errors.teamName && <p className="text-red-500 text-sm">{errors.teamName.message}</p>}
                </div>

            {/* Team Name */}
           
            {/* Description */}
            <div>
                <label htmlFor="description" className="block text-sm font-bold text-gray-700">Description :</label>   
            </div>
            <div>
                 <textarea
                id="description"
                {...register('description')}
                placeholder="Enter Description"
                className="w-full p-2 border border-gray-300 rounded-md "
                disabled={!allowEdit}
                />
                {errors.description && <p className="text-red-500 text-sm text-bold">{errors.description.message}</p>}
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

export default UpdateTeamFrom;