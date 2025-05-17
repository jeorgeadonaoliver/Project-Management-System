import { useQuery } from "@tanstack/react-query";
import { getDepartmentById } from "../../../services/departmentService";

const useGetDepartmentById = (id: number) => {
    return useQuery({
        queryKey: ['department', id],
        queryFn: () => getDepartmentById(id),
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
        enabled: !!id,
    });
};

export default useGetDepartmentById;