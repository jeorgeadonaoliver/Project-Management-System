import { useState } from "react";
import Card from "../components/common/card";
import Gridview from "../components/common/gridview"
import Modal from "../components/common/modal";
import { PageTitle } from "../components/common/page-title";
import useGetTeams from "../hooks/team/query/useGetTeams";
import type { Team } from "../types/team";
import AddTeamFrom from "../components/forms/addTeamForm";

export const Teams = () => {
    const{data: teams, isLoading, error} = useGetTeams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <>
        <div className="p-2">
            <PageTitle title="Teams Page"/>
        </div>
        <div className="flex w-full min-h-screen">
            <div className="p-4 flex-1">
                <Card cardTitle={"List of Teams"} addButton={true} text="Add Team" openModal={openModal} >
                    <Gridview<Team>  gridviewTitle={""} data={teams ?? []}></Gridview>
                </Card>
            </div>
            <div className="p-4 w-120">
                <Card cardTitle={"Team Form"} addButton={false} openModal={openModal}>
                    SAMPLE FORM
                </Card>
            </div>
        </div>

         {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Modal modalTitle={"Add Team"} closeModal= {closeModal}>
              <AddTeamFrom></AddTeamFrom>
            </Modal>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
        </>
    );
};