import * as yup from 'yup'
import { createEmployeeSchema } from '../../../schemas/employee.schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useGetEmployee from '../../../hooks/employee/query/useGetEmployee';
import useCreateEmployee from '../../../hooks/employee/query/useCreateEmployee';
import FormDatePicker from '../../common/FormDatePicker';
import DropdownList from '../../common/dropdown';
import useGetJob from '../../../hooks/job/query/useGetJob';
import useGetDepartments from '../../../hooks/department/query/useGetDepartments';
import useGetTeams from '../../../hooks/team/query/useGetTeams';
import useGetRole from '../../../hooks/role/query/useGetRole';

interface AddEmployeeFormProp{
    onClick: () => void;
}

const AddEmplopyeeForm = ({onClick}: AddEmployeeFormProp)=>{
    const { register, handleSubmit, control, formState: { errors } } = useForm<yup.InferType<typeof createEmployeeSchema>>({
        resolver: yupResolver(createEmployeeSchema)
    });
    
    const{data: manager = []} = useGetEmployee();
    const{data: job = []} = useGetJob();
    const{data: department = []} = useGetDepartments();
    const{data: teams = []} = useGetTeams();
    const{data: roles = []} = useGetRole();
    
    const{mutate: addEmployeetMutation} = useCreateEmployee(onClick);
    
    const onSubmit = async (formdata: yup.InferType<typeof createEmployeeSchema>) => {
        addEmployeetMutation(formdata);
    };

    return(
        <>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <input {...register('firstName')} placeholder="First Name" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.firstName && <p className="text-red-500 text-sm font-bold">{errors.firstName.message}</p>}

            <input {...register('lastName')} placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.lastName && <p className="text-red-500 text-sm font-bold">{errors.lastName.message}</p>}

            <input {...register('email')} placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.email && <p className="text-red-500 text-sm font-bold">{errors.email.message}</p>}

            <input {...register('phoneNumber')} placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.phoneNumber && <p className="text-red-500 text-sm font-bold">{errors.phoneNumber.message}</p>}

            <input {...register('salary')} placeholder="Salary" className="w-full p-2 border border-gray-300 rounded-md"/>
            {errors.salary && <p className="text-red-500 text-sm font-bold">{errors.salary.message}</p>}


            <div>
                <FormDatePicker 
                    name={'hireDate'} 
                    placeholder="Hire Date (yyyy-MM-dd)"
                    control={control}
                    rules={{ required: 'Hire date is required' }}
                    isDisabled={false}
                />
                {errors.hireDate && (
                    <p className="text-red-500 text-sm font-bold">{errors.hireDate.message}</p>
                )}
            </div>
            <div>
                <DropdownList 
                        selectProps={{
                        ...register('jobId', { required: 'Job is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:false,
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
            <div>
                <DropdownList 
                        selectProps={{
                        ...register('departmentId', { required: 'Department is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:false,
                    }}
                    placeHolder='Select Department'
                    items={department} 
                    getOptionKey={(department)=> department.departmentId  ?? 0} 
                    getOptionLabel={(department) => department.departmentName} 
                />
                {errors.jobId && (
                    <p className="text-red-500 text-sm font-bold">{errors.jobId.message}</p>
                )}
            </div>
            <div>
                <DropdownList 
                        selectProps={{
                        ...register('teamId', { required: 'Team is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:false,
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
                <DropdownList 
                        selectProps={{
                        ...register('managerId', { required: 'Manager is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:false,
                    }}
                    placeHolder='Select Manager'
                    items={manager} 
                    getOptionKey={(manager)=> manager.employeeId ?? 0} 
                    getOptionLabel={(manager) => (manager.lastName + "," + manager.firstName)} 
                />
                {errors.teamId && (
                    <p className="text-red-500 text-sm font-bold">{errors.teamId.message}</p>
                )}
            </div>
            <div>
                <DropdownList 
                        selectProps={{
                        ...register('roleId', { required: 'Role is required' }), 
                        className:"w-full p-2 border border-gray-300 rounded-md", 
                        disabled:false,
                    }}
                    placeHolder='Select Role'
                    items={roles} 
                    getOptionKey={(roles)=> roles.roleId ?? 0} 
                    getOptionLabel={(roles) => roles.roleName } 
                />
                {errors.teamId && (
                    <p className="text-red-500 text-sm font-bold">{errors.teamId.message}</p>
                )}
            </div>
            <div className="mt-4 flex gap-4">
                <button type="submit" className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md" >Submit</button>
                <button type="button" className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md" onClick={onClick}>Cancel</button>
            </div>
         </form>
        </>
    );
};

export default AddEmplopyeeForm;