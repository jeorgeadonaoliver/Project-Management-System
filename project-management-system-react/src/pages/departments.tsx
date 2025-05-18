import Card from "../components/common/card";
import Gridview from "../components/common/gridview";
import { PageTitle } from "../components/common/page-title";
import useGetDepartments from "../hooks/department/query/useGetDepartments";
import type { Department } from "../types/department";

export const Departments = () =>{
    const{data: department, isLoading, error} = useGetDepartments();

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
    return(
        <>
        <div className="p-4">
            <PageTitle title="Departments Page"/>
        </div>
        <div className="flex w-full min-h-screen">
            <div className="p-4 flex-1">
                <Card cardTitle={"List of Deparments"} addButton={true} text="Add Department">
                    <Gridview<Department> gridviewTitle={""} data={department || []}></Gridview>
                </Card>
            </div>
            <div className="p-4 w-120">
                <Card cardTitle={"Department Form"} addButton={false} >
                    SAMPLE FORM
                </Card>
            </div>
        </div>
        </>
    );
};