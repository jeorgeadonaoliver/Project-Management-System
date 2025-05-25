import type React from "react";
import useGetEmployeeById from "../../../hooks/employee/query/useGetEmployeeById";
import { updateEmployeeSchema } from "../../../schemas/employee.schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import useUpdateEmployee from "../../../hooks/employee/query/useUpdateEmployee";
import FormDatePicker from "../../common/FormDatePicker";
import DropdownList from "../../common/dropdown";
import useGetEmployee from "../../../hooks/employee/query/useGetEmployee";
import useGetJob from "../../../hooks/job/query/useGetJob";
import useGetDepartments from "../../../hooks/department/query/useGetDepartments";
import useGetTeams from "../../../hooks/team/query/useGetTeams";
import useGetRole from "../../../hooks/role/query/useGetRole";
import { useEffect } from "react";

type UpdateEmployeeFormProps = {
    id: number;
    allowEdit: boolean;
    setAllowEdit: (value:boolean) => void;
}


const UpdateEmployeeForm: React.FC<UpdateEmployeeFormProps> = ({id, allowEdit, setAllowEdit}) => {
    
    const{data: employee, isLoading, error} = useGetEmployeeById(id);
    const{data: manager = []} = useGetEmployee();
    const{data: job = []} = useGetJob();
    const{data: department = []} = useGetDepartments();
    const{data: teams = []} = useGetTeams();
    const{data: roles = []} = useGetRole();

    const{register, handleSubmit, control, formState: {errors}, reset} = useForm<yup.InferType<typeof updateEmployeeSchema>>({
        resolver: yupResolver(updateEmployeeSchema),
        defaultValues: {
            employeeId: employee?.employeeId,
            lastName: employee?.lastName,
            firstName: employee?.firstName,
            email: employee?.email,
            phoneNumber: employee?.phoneNumber,
            hireDate: employee?.hireDate,
            jobId: employee?.jobId,
            departmentId: employee?.departmentId,
            salary: employee?.salary,
            managerId: employee?.managerId,
            teamId: employee?.teamId,
            roleId: employee?.roleId
        }
    });
    
    const {mutate: updateEmployeeMutation} = useUpdateEmployee();
    const onSubmit = async (formdata: yup.InferType<typeof updateEmployeeSchema>) => {

        updateEmployeeMutation(formdata);
        setAllowEdit(false);
    };

    useEffect(() => {
        if(employee){
            reset(employee);
        }   
    }, [employee, reset]);

    return(
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {employee && 
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="departmentId" className="block text-sm font-bold text-gray-700">Employee ID :</label>
                    <input {...register('employeeId')} 
                    placeholder="Employee Id" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    disabled={!allowEdit}
                />
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">First Name :</label>
                    <input {...register('firstName')} 
                        id="firstName"
                        placeholder="First Name" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!allowEdit}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm font-bold">{errors.firstName.message}</p>}

                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">Last Name :</label>
                    <input {...register('lastName')} 
                        id="lastName"
                        placeholder="Last Name" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!allowEdit}
                        />
                    {errors.lastName && <p className="text-red-500 text-sm font-bold">{errors.lastName.message}</p>}
                </div>
                    <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email :</label>
                    <input {...register('email')} 
                        id="email"
                        placeholder="Email" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!allowEdit}
                        />
                    {errors.email && <p className="text-red-500 text-sm font-bold">{errors.email.message}</p>}
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700">Phone Number :</label>
                    <input {...register('phoneNumber')} 
                        id="phoneNumber"
                        placeholder="Phone Number" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!allowEdit}
                        />
                    {errors.phoneNumber && <p className="text-red-500 text-sm font-bold">{errors.phoneNumber.message}</p>}
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="salary" className="block text-sm font-bold text-gray-700">Salary :</label>
                    <input {...register('salary')} 
                        id="salary"
                        placeholder="Salary" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!allowEdit}
                        />
                    {errors.salary && <p className="text-red-500 text-sm font-bold">{errors.salary.message}</p>}
                </div>

                <div className="flex items-center gap-2 w-auto">
                    <label className="block text-sm font-bold text-gray-700">Hire Date :</label>
                    <FormDatePicker 
                        name={'hireDate'} 
                        placeholder="Hire Date (yyyy-MM-dd)"
                        control={control}
                        rules={{ required: 'Hire date is required' }}
                        isDisabled={!allowEdit}
                    />
                    {errors.hireDate && (
                        <p className="text-red-500 text-sm font-bold">{errors.hireDate.message}</p>
                    )}
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="Job" className="block text-sm font-bold text-gray-700">Job Title :</label>
                </div>
                <div>
                     <DropdownList 
                        selectProps={{
                        ...register('jobId', { required: 'Job is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:!allowEdit,
                    }}
                    placeHolder='Select Job'
                    items={job} 
                    getOptionKey={(job)=> job.jobId  ?? 0} 
                    getOptionLabel={(job) => job.jobTitle} 
                    />
                    {errors.jobId && (
                        <p className="text-red-500 text-sm font-bold">{errors.jobId.message}</p>
                    )}
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label className="block text-sm font-bold text-gray-700">Role Title :</label>
                </div>
                    <DropdownList 
                        selectProps={{
                        ...register('roleId', { required: 'Role is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:!allowEdit,
                    }}
                    placeHolder='Select Role'
                    items={roles} 
                    getOptionKey={(roles)=> roles.roleId ?? 0} 
                    getOptionLabel={(roles) => roles.roleName } 
                    />
                    {errors.roleId && (
                        <p className="text-red-500 text-sm font-bold">{errors.roleId.message}</p>
                    )}
                <div>   
                </div>
                <div className="flex items-center gap-2 w-auto">
                    <label className="block text-sm font-bold text-gray-700">Department :</label>
                </div>
                <div>
                    <DropdownList 
                        selectProps={{
                        ...register('departmentId', { required: 'Department is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:!allowEdit,
                        }}
                    placeHolder='Select Department'
                    items={department} 
                    getOptionKey={(department)=> department.departmentId  ?? 0} 
                    getOptionLabel={(department) => department.departmentName} 
                    />
                    {errors.departmentId && (
                        <p className="text-red-500 text-sm font-bold">{errors.departmentId.message}</p>
                    )}    
                </div>   
                <div className="flex items-center gap-2 w-auto">
                    <label htmlFor="Team Name" className="block text-sm font-bold text-gray-700">Team Name :</label>
                </div>
                <div>
                    <DropdownList 
                        selectProps={{
                        ...register('teamId', { required: 'Team is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:!allowEdit,
                    }}
                    placeHolder='Select Team'
                    items={teams} 
                    getOptionKey={(teams)=> teams.teamId ?? 0} 
                    getOptionLabel={(teams) => teams.teamName} 
                    />
                    {errors.teamId && (
                        <p className="text-red-500 text-sm font-bold">{errors.teamId.message}</p>
                    )}
                </div>
                <div>           
                    <label className="block text-sm font-bold text-gray-700">Reporting Manager :</label>
                    <DropdownList 
                        selectProps={{
                        ...register('managerId', { required: 'Manager is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:!allowEdit,
                    }}
                    placeHolder='Select Manager'
                    items={manager} 
                    getOptionKey={(manager)=> manager.employeeId ?? 0} 
                    getOptionLabel={(manager) => (manager.lastName + "," + manager.firstName)} 
                    />
                    {errors.managerId && (
                        <p className="text-red-500 text-sm font-bold">{errors.managerId.message}</p>
                    )}
                </div>
                {allowEdit && (
                    <div className="mt-4 flex gap-4">
                        <button type="submit" 
                            className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md" >
                                Submit
                        </button>
                        <button type="button" 
                        className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md" 
                        onClick={() => setAllowEdit(false)}>
                            Cancel
                        </button>
                    
                    </div>
                )}

            </form>
        }      
        </>
    );
}

export default UpdateEmployeeForm;