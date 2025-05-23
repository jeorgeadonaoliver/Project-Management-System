import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../../../services/projectService";
import { toast } from "react-toastify";

const useCreateProject = (onSuccessCallback?: ()=> void) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            queryClient.invalidateQueries({ queryKey: ['project'] });
            toast.success('Creating Project successfully!');
            
            if(onSuccessCallback){
                onSuccessCallback();
            }
        },
        onError: (error) => {
            console.error("Error on creating Department: ", error);
        }
    });
};
export default useCreateProject;