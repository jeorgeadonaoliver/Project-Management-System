import { useQuery } from "@tanstack/react-query";
import {getEmployeeProject} from "../../../services/employeeProjectService";

const useGetEmployeeProject = () => {
    return useQuery({
        queryKey: ['employeeProjects'],
        queryFn: getEmployeeProject,
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export default useGetEmployeeProject;