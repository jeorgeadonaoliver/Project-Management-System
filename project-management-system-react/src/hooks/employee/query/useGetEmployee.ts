import { useQuery } from "@tanstack/react-query";
import {getEmployee} from "../../../services/employeeService"

const useGetEmployee = () => {
    return useQuery({
        queryKey: ['employee'],
        queryFn: getEmployee,
        select: (item) => item.map(e => ({
            employeeId: e.employeeId,
            lastName: e.lastName,
            firstName: e.firstName,
            fullname: `${e.lastName} , ${e.firstName}`,
            email: e.email,
            phoneNumber: e.phoneNumber,
            hireDate: e.hireDate,
            jobId: e.jobId,
            jobName: e.jobName,
            salary: e.salary,
            departmentId: e.departmentId,
            departmentName: e.departmentName,
            managerId: e.managerId,
            teamId: e.teamId,
            teamName: e.teamName,
            roleId: e.roleId,
            roleName: e.roleName,
        })), 
        retry: 3,
        staleTime: 1000 * 60 * 5
    });
};

export default useGetEmployee;