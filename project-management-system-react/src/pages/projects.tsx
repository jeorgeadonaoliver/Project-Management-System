import Card from "../components/common/card";
import Gridview from "../components/common/gridview";
import { PageTitle } from "../components/common/page-title";
import useGetProject from "../hooks/project/query/useGetProject";
import type { Project } from "../types/project";

export const Projects = () => {

    const{data: proj, isLoading, error} = useGetProject();
    const openModal = () => {return false};

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <>
        <div className="p-4">
            <PageTitle title="Projects Page"/>
        </div>
         <div className="flex w-full min-h-screen">
            <div className="p-4 flex-1">
                <Card cardTitle={"List of Project"} addButton={true} text="Add Project" openModal={openModal}>
                    <Gridview<Project> gridviewTitle={""} data={proj || []}></Gridview>
                </Card>
            </div>
            <div className="p-4 w-120">
                <Card cardTitle={"Project Form"} addButton={false} openModal={openModal} >
                    SAMPLE FORM
                </Card>
            </div>
        </div>
        </>
    );
};