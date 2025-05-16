import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { EmployeeProject } from "../../../types/employeeproject";
import { createEmployeeProject } from "../../../services/employeeProjectService";

const useCreateEmplpoyeeProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: EmployeeProject)=>{
            return createEmployeeProject(data);
        },
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey:['employeeproject']});
            queryClient.invalidateQueries({queryKey:['employeeprojects']});
            queryClient.invalidateQueries({queryKey:['employeeprojectsbyprojectid']});
            queryClient.invalidateQueries({queryKey:['employeeprojectbyemployee']});
        },
    });
};

export default useCreateEmplpoyeeProject;