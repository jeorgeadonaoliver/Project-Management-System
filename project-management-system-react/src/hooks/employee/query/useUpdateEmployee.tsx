import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../../../services/employeeService"
import { Employee } from "../../../types/employee";

const useUpdateEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data : Employee)=>{
            return updateEmployee(data);
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['employee']});
            queryClient.invalidateQueries({queryKey:['employees']});
            queryClient.invalidateQueries({queryKey:['employeesdepteam']});
        },
        onError: (error) =>{
            console.error('Error on update employee detail: ', error);
        }
    });
};

export default useUpdateEmployee;