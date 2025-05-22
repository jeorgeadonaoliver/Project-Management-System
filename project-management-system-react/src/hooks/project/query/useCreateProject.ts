import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../../../services/projectService";

const useCreateProject = (onSuccessCallback?: ()=> void) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            queryClient.invalidateQueries({ queryKey: ['project'] });
        
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }
    });
};
export default useCreateProject;