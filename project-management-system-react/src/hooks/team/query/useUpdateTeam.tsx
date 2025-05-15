import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeam } from "../../../services/teamService";

const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['items']});
      queryClient.invalidateQueries({queryKey:['item']});
    },
  });
};

export default useUpdateTeam;