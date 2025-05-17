import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EmployeeProject } from "../../../types/employeeproject";
import { updateEmployeeProject } from "../../../services/employeeprojectService";

const useUpdateEmployeeProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data : EmployeeProject) =>{
            return updateEmployeeProject(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['employeeproject']});
            queryClient.invalidateQueries({queryKey:['employeeprojects']});
            queryClient.invalidateQueries({queryKey:['employeeprojectsbyprojectid']});
            queryClient.invalidateQueries({queryKey:['employeeprojectbyemployee']});
        },
        onError: (error) =>{
            console.error('Error on updating employee project: ', error);
        }
    });
};

export default useUpdateEmployeeProject;