import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDepartment } from "../../../services/departmentService";
import { Department } from "../../../types/department";

const useUpdateDepartment = () =>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (department: Department) =>{
            return updateDepartment(department);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['departments']});
            queryClient.invalidateQueries({queryKey:['department']});
        },
        onError: (error) => {
            console.error('Error on updating Department record: ', error);
        }
    });
};

export default useUpdateDepartment;