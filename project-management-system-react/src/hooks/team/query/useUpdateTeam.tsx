import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeam } from "../../../services/teamService";
import { Team } from "../../../types/team";

const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (team :  Team) => {
        return updateTeam(team);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['teams']});
      queryClient.invalidateQueries({queryKey:['team']});
    },
    onError: (error) => {
        console.error('Error on updating team: ', error);
    }
  });
};

export default useUpdateTeam;