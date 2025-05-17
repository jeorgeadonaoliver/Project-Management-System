import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../../services/projectService";

const useGetProject = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProject,
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
};

export default useGetProject;