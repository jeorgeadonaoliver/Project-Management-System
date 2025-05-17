import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Job } from "../../../types/job";
import { createJob } from "../../../services/jobService";

const useCreateJob = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (job : Job) => {
            return createJob(job);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['jobs']});
            queryClient.invalidateQueries({queryKey:['job']})
        },
        onError: (error) => {
            console.error("Error creating job:", error);
        }
    });
};

export default useCreateJob;