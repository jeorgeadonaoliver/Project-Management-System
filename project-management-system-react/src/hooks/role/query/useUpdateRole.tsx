import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRole } from "../../../services/roleService";

const useUpdateRole = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateRole,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['roles']});
            queryClient.invalidateQueries({queryKey:['role']})
        }
    });
};


export default useUpdateRole;