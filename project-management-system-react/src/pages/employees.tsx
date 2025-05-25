import { MdAdd, MdEditNote } from "react-icons/md";
import Card from "../components/common/card";
import Gridview from "../components/common/gridview";
import { PageTitle } from "../components/common/page-title";
import useGetEmployee from "../hooks/employee/query/useGetEmployee";
import type { Employee } from "../types/employee";
import { useEffect, useState } from "react";
import Modal from "../components/common/modal";
import AddEmplopyeeForm from "../components/forms/employee/AddEmplopyeeForm";
import UpdateEmployeeForm from "../components/forms/employee/UpdateEmployeeForm";

export const Employees = () => {

    const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);
    const handleIdSelect = (id: number) => {
        setSelectedEmployeeId(id);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
        setSelectedEmployeeId(selectedEmployeeId ?? null);
    }, 100); 
        return () => clearInterval(interval);
    }, [selectedEmployeeId]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const{data: employee, isLoading, error} = useGetEmployee();
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
                <PageTitle title="Employee Page"/>
            </div>
             <div className="flex w-full min-h-screen">
                <div className="p-4 flex-1 min-w-[800px]">
                    <Card cardTitle={"List of Employees"} addButton={true} iconbtn={<MdAdd size="20" />} text="Add Employee" onClick={openModal} >
                        <div className="overflow-x-auto">
                            <Gridview<Employee> gridviewTitle={""} data={employee ?? []} onSelectedId={handleIdSelect}></Gridview>
                        </div>
                    </Card>
                </div>
                <div className="p-4 w-120">
                    {selectedEmployeeId == null || selectedEmployeeId == undefined ? (
                        <Card cardTitle={"Employee Form"} addButton={false} onClick={openModal} iconbtn={<MdEditNote size={20}/>}>
                            SAMPLE FORM
                        </Card>
                    ):(
                        <Card cardTitle={"Employee Form"} addButton={true} text="Edit" onClick={setEdit} iconbtn={<MdEditNote size={20}/>}>
                            {/* <UpdateProjectForm id={selectedProjecttId} allowEdit={allowEdit} setAllowEdit={setAllowEdit}></UpdateProjectForm> */}
                            <UpdateEmployeeForm id={selectedEmployeeId} allowEdit={allowEdit} setAllowEdit={setAllowEdit}></UpdateEmployeeForm>
                        </Card>
                    )};
                    
                </div>
            </div>
             {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <Modal modalTitle={"Add Employee"} closeModal= {closeModal}>
                                <AddEmplopyeeForm onClick={closeModal} />
                        </Modal>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};