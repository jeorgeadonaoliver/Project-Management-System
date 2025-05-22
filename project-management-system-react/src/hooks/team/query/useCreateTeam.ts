import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeam } from "../../../services/teamService";
import type { Team } from "../../../types/team";
import { toast } from "react-toastify";

const useCreateTeam = (onSuccessCallback?: () => void) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (team: Team) => {
            return createTeam(team);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['teams']});
            toast.success('Creating Team successfully!');

            if(onSuccessCallback){
                onSuccessCallback();
            }
        },
        onError: (error) => {
            console.error('Error on creating Team: ', error);
        }
    });
};

export default useCreateTeam;