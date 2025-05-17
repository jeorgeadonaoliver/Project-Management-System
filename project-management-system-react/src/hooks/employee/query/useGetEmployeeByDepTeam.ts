import { useQuery } from "@tanstack/react-query";
import { getEmployeeByDepTeam} from "../../../services/employeeService"

const useGetEmployeeByDepTeam = (id : number) => {
    return useQuery({
        queryKey: ['employeesdepteam', id],
        queryFn: () => getEmployeeByDepTeam(id),
        retry: 3,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
};

export default useGetEmployeeByDepTeam;