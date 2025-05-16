import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../../../services/projectService";

const useGetProjectById = (id:number) => {
    return useQuery({
        queryKey: ['project', id],
        queryFn: () => getProjectById(id),
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
        enabled: !!id,
        select: (data) => {
            return {
                ...data,
                projectId: data.projectId,
                projectName: data.projectName,
                startDate: data.startDate,
                endDate: data.endDate,
                description: data.description,
                teamId: data.teamId,
                teamName: data.teamName,
            };
        },
    });
};

export default useGetProjectById;