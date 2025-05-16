import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeam } from "../../../services/teamService";
import { Team } from "../../../types/team";

const useCreateTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (team: Team) => {
            return createTeam(team);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['teams']});
        },
        onError: (error) => {
            console.error('Error on creating Team: ', error);
        }
    });
};

export default useCreateTeam;