import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeam } from "../../../services/teamService";

const useCreateTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTeam,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['teams']});
        }
    });
};

export default useCreateTeam;