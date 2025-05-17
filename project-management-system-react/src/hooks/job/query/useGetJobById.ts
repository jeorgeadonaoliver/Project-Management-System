import { useQuery } from "@tanstack/react-query";
import { getJobById } from "../../../services/jobService";

const useGetJobById = (id:number) => {

    return useQuery({
        queryKey: ['project', id],
        queryFn: () => getJobById(id),
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
        enabled: !!id
    });
};
export default useGetJobById;