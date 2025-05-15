import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRole } from "../../../services/roleService";

const useCreateRole = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: createRole,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['roles']});
            queryClient.invalidateQueries({queryKey:['role']})
        }
    });
};

export default useCreateRole;