import { useQuery } from "@tanstack/react-query";
import { getJob } from "../../../services/jobService";

const useGetJob = () =>{
    return useQuery({
        queryKey:['Jobs'],
        queryFn: getJob,
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export default useGetJob;