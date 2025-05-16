import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDepartment } from "../../../services/departmentService";
import { Department } from "../../../types/department";

const useCreateDepartment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Department) =>{
            return createDepartment(data);  
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] });
            queryClient.invalidateQueries({ queryKey: ['department'] });
        },
        onError: (error) => {
            console.error("Error on creating Department: ", error);
        }
    });
};

export default useCreateDepartment;