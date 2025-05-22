import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeam } from "../../../services/teamService";
import type { Team } from "../../../types/team";
import { toast } from "react-toastify";

const useUpdateTeam = (onSuccessCallback?: ()=> void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (team :  Team) => {
        return updateTeam(team);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['teams']});
      queryClient.invalidateQueries({queryKey:['team']});
      toast.success('Updating Team Details successfully!');

      if(onSuccessCallback){
        onSuccessCallback();
      }
    },
    onError: (error) => {
        console.error('Error on updating team: ', error);
    }
  });
};

export default useUpdateTeam;