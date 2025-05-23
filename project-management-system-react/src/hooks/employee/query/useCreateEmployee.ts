import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {CreateEmployee} from "../../../types/employee";
import {createEmployee} from "../../../services/employeeService";
import { toast } from "react-toastify";

const useCreateEmployee = (onSuccessCallback?: ()=> void) =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (employee: CreateEmployee )=> {
            return createEmployee(employee);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['employees']});
            queryClient.invalidateQueries({queryKey:['employee']});
            toast.success('Creating Employee successfully!');
                        
                if(onSuccessCallback){
                    onSuccessCallback();
                }
        },
        onError: (error) => {
            console.error("Error on creating new employ: " , error);
        }
    });
};

export default useCreateEmployee;