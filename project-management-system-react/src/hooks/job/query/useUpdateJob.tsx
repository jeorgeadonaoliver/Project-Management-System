import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJob } from "../../../services/jobService";
import { Job } from "../../../types/job";

const useUpdateJob = () => {

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (job: Job) => {
            return updateJob(job);
        },
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['job', variables.jobId], data);
            queryClient.invalidateQueries({queryKey: ['jobs']});
        },
        onError: (error) => {
            console.error('Error updating job:', error);
        }
    });
};

export default useUpdateJob;