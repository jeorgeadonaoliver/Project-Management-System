import Card from "../components/common/card";
import Gridview from "../components/common/gridview";
import { PageTitle } from "../components/common/page-title";
import useGetEmployee from "../hooks/employee/query/useGetEmployee";
import type { Employee } from "../types/employee";

export const Users = () => {
    
    const{data: emp, isLoading, error} = useGetEmployee();
    const openModal = () => { return false;};

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
    return(
        <>
            <div className="p-4">
                <PageTitle title="Users Page"/>
            </div>
             <div className="flex w-full min-h-screen">
                <div className="p-4 flex-1 min-w-[800px]">
                    <Card cardTitle={"List of Users"} addButton={true} text="Add User" openModal={openModal} >
                        <div className="overflow-x-auto">
                            <Gridview<Employee> gridviewTitle={""} data={emp ?? []}></Gridview>
                        </div>
                    </Card>
                </div>
                <div className="p-4 w-120">
                    <Card cardTitle={"Team Form"} addButton={false} openModal={openModal}>
                        SAMPLE FORM
                    </Card>
                </div>
            </div>
        </>
    );
};