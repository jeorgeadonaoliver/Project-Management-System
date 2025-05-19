import { yupResolver } from "@hookform/resolvers/yup";
import { teamSchema } from "../../schemas/team.schema";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { createTeam } from "../../services/teamService";


type TeamFromInputs = yup.InferType<typeof teamSchema>

const AddTeamFrom = () => {

    const{register, handleSubmit, formState: {errors}} = useForm<TeamFromInputs>({
        resolver: yupResolver(teamSchema)
    });

    const onSubmit = async (data: TeamFromInputs) => {
        await createTeam(data);
    };

    return(
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

            <input {...register('teamName')} placeholder="Team Name" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.teamName && <p>{errors.teamName.message}</p>}

            <input {...register('description')} placeholder="Description" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.description && <p>{errors.description.message}</p>}

      <button type="submit" className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md">Submit</button>
    </form>
    );
};

export default AddTeamFrom;