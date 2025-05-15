import { useQuery } from "@tanstack/react-query";
import { getTeams } from "../../../services/teamService";

const useGetTeams = () => {
    return useQuery({
        queryKey: ['teams'], 
        queryFn: getTeams,
        retry: 3,
        staleTime: 1000 * 60 * 5,// 5 minutes
        });
};


export default useGetTeams;