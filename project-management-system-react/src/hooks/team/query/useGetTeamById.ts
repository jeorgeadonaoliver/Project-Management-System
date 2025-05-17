import { useQuery } from "@tanstack/react-query";
import { getTeamById } from "../../../services/teamService";

const useGetTeamById = (id: number) => {
    return useQuery({
        queryKey: ['team', id],
        queryFn: () => getTeamById(id),
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minute
        enabled: !!id,
    });
};

export default useGetTeamById;