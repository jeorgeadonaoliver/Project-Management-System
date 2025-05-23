import { useEffect, useState } from "react";
import Card from "../components/common/card";
import Gridview from "../components/common/gridview";
import { PageTitle } from "../components/common/page-title";
import useGetProject from "../hooks/project/query/useGetProject";
import type { Project } from "../types/project";
import { MdAdd, MdEditNote } from "react-icons/md";
import Modal from "../components/common/modal";
import AddProjectForm from "../components/forms/project/AddProjectForm";
import UpdateProjectForm from "../components/forms/project/UpdateProjectForm";

export const Projects = () => {

    const [selectedProjecttId, setSelectedProjectId] = useState<number | null>(null);
    const handleIdSelect = (id: number) => {
        setSelectedProjectId(id);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setSelectedProjectId(selectedProjecttId ?? null);
    }, 100); 
        return () => clearInterval(interval);
    }, [selectedProjecttId]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const{data: project, isLoading, error} = useGetProject();
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [allowEdit, setAllowEdit] = useState(false);

    const setEdit = () => {  
      setAllowEdit(true);
      console.log("isAllowed edit?", allowEdit);
    };

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <>
        <div className="p-4">
            <PageTitle title="Projects Page"/>
        </div>
         <div className="flex w-full min-h-screen">
            <div className="p-4 flex-1">
                <Card cardTitle={"List of Project"} addButton={true} iconbtn={<MdAdd size="20" />}  text="Add Project" onClick={openModal}>
                    <Gridview<Project> gridviewTitle={""} data={project || []} onSelectedId={handleIdSelect}></Gridview>
                </Card>
            </div>
            <div className="p-4 w-120">
                {selectedProjecttId == null || selectedProjecttId == undefined ? (
                    
                <Card cardTitle={"Project Form"} addButton={false} onClick={openModal} iconbtn={<MdEditNote size={20}/>} >
                    Please select project
                </Card>
                ):(
                <Card cardTitle={"Project Form"} addButton={true} text="Edit" onClick={setEdit} iconbtn={<MdEditNote size={20}/>}>
                    <UpdateProjectForm id={selectedProjecttId} allowEdit={allowEdit} setAllowEdit={setAllowEdit}></UpdateProjectForm>
                </Card>
                )};
            </div>
        </div>
         {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Modal modalTitle={"Add Project"} closeModal= {closeModal}>
                <AddProjectForm onClick={closeModal}></AddProjectForm>
            </Modal>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
        )}
        </>
    );
};