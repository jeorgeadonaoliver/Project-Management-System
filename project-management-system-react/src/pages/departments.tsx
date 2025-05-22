import Card from "../components/common/card";
import Gridview from "../components/common/gridview";
import { PageTitle } from "../components/common/page-title";
import useGetDepartments from "../hooks/department/query/useGetDepartments";
import type { Department } from "../types/department";
import { MdAdd, MdEditNote } from "react-icons/md";
import { useEffect, useState } from "react";
import Modal from "../components/common/modal";
import AddDepartmentForm from "../components/forms/department/AddDepartmentForm";
import UpdateDepartmentForm from "../components/forms/department/UpdateDepartmentForm";

export const Departments = () =>{

    const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | null>(null);
    const handleIdSelect = (id: number) => {
      setSelectedDepartmentId(id);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setSelectedDepartmentId(selectedDepartmentId ?? null);
    }, 100); 
        return () => clearInterval(interval);
    }, [selectedDepartmentId]);

    const{data: department, isLoading, error} = useGetDepartments();
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
            <PageTitle title="Departments Page"/>
        </div>
        <div className="flex w-full min-h-screen">
            <div className="p-4 flex-1">
                <Card cardTitle={"List of Deparments"} addButton={true} text="Add Department" iconbtn={<MdAdd size="20" />} onClick={openModal}>
                    <Gridview<Department> gridviewTitle={""} data={department || []} onSelectedId={handleIdSelect}></Gridview>
                </Card>
            </div>
            <div className="p-4 w-120">
                {selectedDepartmentId == null || selectedDepartmentId == undefined ? (                    
                    <Card cardTitle={"Department Form"} addButton={false} iconbtn={<MdEditNote size={20}/>} onClick={openModal}>
                        <p className="text-zinc-950">Please Select Deparment</p>
                    </Card>
                ):(
                    <Card cardTitle={"Department Form"} addButton={true} text="Edit" iconbtn={<MdEditNote size={20}/>} onClick={setEdit} >
                        <UpdateDepartmentForm id={selectedDepartmentId} allowEdit={allowEdit} setAllowEdit={setAllowEdit}></UpdateDepartmentForm>
                    </Card>
                )}

            </div>
        </div>
        {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Modal modalTitle={"Add Department"} closeModal= {closeModal}>
              <AddDepartmentForm onClick={closeModal}></AddDepartmentForm>
            </Modal>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
        )}
        </>
    );
};