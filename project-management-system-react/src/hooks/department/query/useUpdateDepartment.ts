import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDepartment } from "../../../services/departmentService";
import type { Department } from "../../../types/department";
import { toast } from "react-toastify";

const useUpdateDepartment = () =>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (department: Department) =>{
            return updateDepartment(department);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['departments']});
            queryClient.invalidateQueries({queryKey:['department']});
            toast.success('Updating Department detail successfully!');
        },
        onError: (error) => {
            console.error('Error on updating Department record: ', error);
        }
    });
};

export default useUpdateDepartment;