import { useMutation, useQueryClient } from "@tanstack/react-query";
import {Employee} from "../../../types/employee";
import {createEmployee} from "../../../services/employeeService";

const useCreateEmployee = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (employee: Employee )=> {
            return createEmployee(employee);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['employees']});
            queryClient.invalidateQueries({queryKey:['employee']});
        },
        onError: (error) => {
            console.error("Error on creating new employ: " , error);
        }
    });
};

export default useCreateEmployee;