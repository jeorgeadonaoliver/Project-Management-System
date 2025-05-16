import { useQuery } from "@tanstack/react-query";
import {getEmployeeById} from "../../../services/employeeService"

const useGetEmployeeById = (id : number) => {
    return useQuery({
        queryKey: ['employee', id],
        queryFn: () => getEmployeeById(id),
        retry: 3,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
};

export default useGetEmployeeById;