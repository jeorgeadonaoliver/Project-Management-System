import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../../../services/employeeService"
import type { UpdateEmployee } from "../../../types/employee";
import { toast } from "react-toastify";

const useUpdateEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data : UpdateEmployee)=>{
            return updateEmployee(data);
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['employee']});
            queryClient.invalidateQueries({queryKey:['employees']});
            queryClient.invalidateQueries({queryKey:['employeesdepteam']});
            
            toast.success('Updating Project Details successfully!');
                       
        },
        onError: (error) =>{
            console.error('Error on update employee detail: ', error);
        }
    });
};

export default useUpdateEmployee;