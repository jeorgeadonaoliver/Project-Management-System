import { useEffect, useState } from "react";
import Card from "../components/common/card";
import Gridview from "../components/common/gridview"
import Modal from "../components/common/modal";
import { PageTitle } from "../components/common/page-title";
import useGetTeams from "../hooks/team/query/useGetTeams";
import type { Team } from "../types/team";
// import { useQueryClient } from "@tanstack/react-query";
import AddTeamFrom from "../components/forms/team/AddTeamForm";
import { MdAdd, MdEditNote } from "react-icons/md";
import UpdateTeamFrom from "../components/forms/team/UpdateTeamFrom";


export const Teams = () => {

    const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

    const handleIdSelect = (id: number) => {
      setSelectedTeamId(id);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setSelectedTeamId(selectedTeamId ?? null);
    }, 100); 
      return () => clearInterval(interval);
    }, [selectedTeamId]);

    const{data: teams, isLoading, error} = useGetTeams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allowEdit, setAllowEdit] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const setEdit = () => {  
      setAllowEdit(true);
      console.log("isAllowed edit?", allowEdit);
    };

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <>
        <div className="p-2">
            <PageTitle title="Teams Page"/>
        </div>
        <div className="flex w-full min-h-screen">
            <div className="p-4 flex-1">
                <Card cardTitle={"List of Teams"} addButton={true} text="Add Team" onClick={openModal} iconbtn={<MdAdd size={20}/>} >
                    <Gridview<Team>  gridviewTitle={""} data={teams ?? []} onSelectedId={handleIdSelect}></Gridview>
                </Card>
            </div>
            <div className="p-4 w-120">
                    {selectedTeamId == null || selectedTeamId == undefined ? (
                      <Card cardTitle={"Team Form"} addButton={false} text="Edit" onClick={setEdit} iconbtn={<MdEditNote size={20}/>}>
                        <p className="text-zinc-950">Please Select Team</p>
                      </Card>
                    ) : (                     
                      <Card cardTitle={"Team Form"} addButton={true} text="Edit" onClick={setEdit} iconbtn={<MdEditNote size={20}/>}>
                        <UpdateTeamFrom id={selectedTeamId} allowEdit={allowEdit} setAllowEdit={setAllowEdit} />
                      </Card>                      
                    )}
            </div>
        </div>

         {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Modal modalTitle={"Add Team"} closeModal= {closeModal}>
              <AddTeamFrom onClick={closeModal}></AddTeamFrom>
            </Modal>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
        </>
    );
};

