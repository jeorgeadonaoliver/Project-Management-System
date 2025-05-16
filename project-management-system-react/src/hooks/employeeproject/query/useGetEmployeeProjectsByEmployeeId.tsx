import { useQuery } from "@tanstack/react-query";
import { getEmployeeProjectByEmployeeId } from "../../../services/employeeProjectService";

const useGetEmployeeProjectByEmployeeId = (id: number) => {
    return useQuery({
        queryKey: ['employeeprojectbyemployee', id],
        queryFn : () => getEmployeeProjectByEmployeeId(id),
        retry: 3,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
};

export default useGetEmployeeProjectByEmployeeId;