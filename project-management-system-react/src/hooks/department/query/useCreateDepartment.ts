import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDepartment } from "../../../services/departmentService";
import type { Department } from "../../../types/department";
import { toast } from "react-toastify";

const useCreateDepartment = (onSuccessCallback?:() => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Department) =>{
            return createDepartment(data);  
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] });
            queryClient.invalidateQueries({ queryKey: ['department'] });
            toast.success('Creating Department successfully!');

            if (onSuccessCallback) {
                onSuccessCallback(); 
            }
        },
        onError: (error) => {
            console.error("Error on creating Department: ", error);
        }
    });
};

export default useCreateDepartment;