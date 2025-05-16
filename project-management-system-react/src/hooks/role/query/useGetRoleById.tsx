import { useQuery } from "@tanstack/react-query";
import { getRoleById } from "../../../services/roleService";

const useGetRoleById = (id: string) => {
    return useQuery({
        queryKey: ['role', id],
        queryFn: () => getRoleById(id),
        retry: 3,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
};

export default useGetRoleById;