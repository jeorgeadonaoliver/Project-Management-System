import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDepartment } from "../../../services/departmentService";

const useUpdateDepartment = () =>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateDepartment,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['departments']});
            queryClient.invalidateQueries({queryKey:['department']});
        },
    });
};

export default useUpdateDepartment;