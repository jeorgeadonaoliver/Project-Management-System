import { yupResolver } from "@hookform/resolvers/yup";
import { teamSchema } from "../../../schemas/team.schema";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import useCreateTeam from "../../../hooks/team/query/useCreateTeam";

type TeamFromInputs = yup.InferType<typeof teamSchema>

interface AddTeamFromProp{
    onClick : () => void;
}

const AddTeamFrom = ({onClick}:AddTeamFromProp) => {

    const{register, handleSubmit, formState: {errors}} = useForm<TeamFromInputs>({
        resolver: yupResolver(teamSchema)
    });

    const{mutate: addTeamMutation} = useCreateTeam();

    const onSubmit = async (data: TeamFromInputs) => {
        addTeamMutation(data);
        onClick = () => false;
    };

    return(
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

            <input {...register('teamName')} placeholder="Team Name" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.teamName && <p className="text-red-500 text-sm text-bold">{errors.teamName.message}</p>}

            <input {...register('description')} placeholder="Description" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.description && <p className="text-red-500 text-sm text-bold">{errors.description.message}</p>}
            <div className="mt-4 flex gap-4">
                <button type="submit" className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md">Submit</button>
                <button type="submit" className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md" onClick={onClick}>Cancel</button>
            </div>
    </form>
    );
};

export default AddTeamFrom;