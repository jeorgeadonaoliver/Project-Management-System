import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../../../services/departmentService";

const useGetDepartments = () => {

    return useQuery({
        queryKey: ['departments'],
        queryFn: getDepartments,
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export default useGetDepartments;