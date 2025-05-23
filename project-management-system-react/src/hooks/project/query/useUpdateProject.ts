import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../../../services/projectService";
import type { Project } from "../../../types/project";
import { toast } from "react-toastify";

const useUpdateProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (project : Project) =>{
            return updateProject(project);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            queryClient.invalidateQueries({ queryKey: ['project'] });
            toast.success('Updating Project Details successfully!');
                        
        },
        onError: (error) => {
            console.error('Error updating project:', error);
        }
    });
};

export default useUpdateProject;