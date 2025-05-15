import { useQuery } from "@tanstack/react-query";
import { getRole } from "../../../services/roleService";

const useGetRole = () => {

    return useQuery({
        queryKey: ['roles'],
        queryFn: getRole,
        retry: 3,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

};

export default useGetRole;