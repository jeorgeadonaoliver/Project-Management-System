import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRole } from "../../../services/roleService";
import { Role } from "../../../types/role";

const useUpdateRole = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (role : Role)=>{
            return updateRole(role);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['roles']});
            queryClient.invalidateQueries({queryKey:['role']})
        },
        onError: (error) => {
            console.error("Error updating role:", error);
        }
    });
};


export default useUpdateRole;