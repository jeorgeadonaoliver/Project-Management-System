import { useQuery } from "@tanstack/react-query";
import { getEmployeeProjectByProjectId } from "../../../services/employeeprojectService";

const useGetEmployeeProjectsByProjectId = (id:number) => {
    return useQuery({
        queryKey:['employeeprojectsbyprojectid', id],
        queryFn: () => getEmployeeProjectByProjectId(id),
        retry: 3,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
};

export default useGetEmployeeProjectsByProjectId;