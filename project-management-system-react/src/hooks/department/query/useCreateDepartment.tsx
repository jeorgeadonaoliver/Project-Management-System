import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDepartment } from "../../../services/departmentService";

const useCreateDepartment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createDepartment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] });
        }
    });
};

export default useCreateDepartment;