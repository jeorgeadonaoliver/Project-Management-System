import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRole } from "../../../services/roleService";
import type { Role } from "../../../types/role";

const useCreateRole = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (role: Role) => {
            return createRole(role);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['roles']});
            queryClient.invalidateQueries({queryKey:['role']})
        },
        onError: (error) => {
            console.error('Error creating role: ', error);
        }
    });
};

export default useCreateRole;