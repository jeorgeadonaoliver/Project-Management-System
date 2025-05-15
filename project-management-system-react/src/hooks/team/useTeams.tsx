import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTeam, getTeamById, getTeams, updateTeam } from "../../services/teamService";

export const useTeams = () => {
    return useQuery({
        queryKey: ['teams'], 
        queryFn: getTeams});
};

export const useTeamById = (id: number) => {
    return useQuery({
        queryKey: ['team', id],
        queryFn: () => getTeamById(id),
        enabled: !!id
    });
};

export const useCreateTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTeam,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['teams']});
        }
    });
};

export const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['items']});
      queryClient.invalidateQueries({queryKey:['item']});
    },
  });
};