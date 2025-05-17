import { useQuery } from "@tanstack/react-query";
import {getEmployee} from "../../../services/employeeService"

const useGetEmployee = () => {
    return useQuery({
        queryKey: ['employee'],
        queryFn: getEmployee,
        retry: 3,
        staleTime: 1000 * 60 * 5
    });
};

export default useGetEmployee;