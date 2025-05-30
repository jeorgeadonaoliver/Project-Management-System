import { useState } from "react";

import { useQueryClient } from "@tanstack/react-query";
import useGetTeams from "../hooks/team/query/useGetTeams";
import useCreateTeam from "../hooks/team/query/useCreateTeam";
import useUpdateTeam from "../hooks/team/query/useUpdateTeam";
import Sidebar  from "../components/sidebar/sidebar";
import { BsGearFill, BsPlus } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';

export const TeamList = () => {
    const queryClient = useQueryClient();
    
    const{data: teams, isLoading, error} = useGetTeams();
    const createMutation = useCreateTeam();
    const updateMutation = useUpdateTeam();

    const[newTeamName, setNewTeamName] = useState('');
    const[newDescription, setNewDescription] = useState('');

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

        const sidebarItems = [
        { icon: <BiHomeCircle size="25" />, text: "Home", index: 0, route: '/layout/home'},
        { icon: <FaListUl size="25" />, text: "Employee", index: 0, route:'/layout/employee'},
        { icon: <BsPlus size="25" />, text: "Plus", index: 3 },
        { icon: <BsGearFill size="25" />, text: "Settings", index: 5 }
    ];

     return (
  <div>
    <Sidebar sidebarItems={sidebarItems}></Sidebar>
      <h2>Items</h2>
      <ul>
        {teams?.map((item) => (
          <li key={item.teamId}>
            {editingId === item.teamId ? (//If team ID is equal to editing ID, show edit form
              <>
                <input
                  type="text"
                  value={editName ?? ''}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  value={editDescription ?? ''}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button
                  onClick={() => {
                    updateMutation.mutate({
                      teamId: item.teamId,
                      teamName: editName,
                      description: editDescription,
                    },{
                        onSuccess: () => {
                            setEditingId(null);
                            queryClient.invalidateQueries({queryKey:['teams']});
                        }
                    });
                    //setEditingId(null);
                  }}
                >
                  Save
                </button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : ( //If team ID is not equal to editing ID, show item name and description and edit button
              <>
                {item.teamName} - {item.description}
                <button
                  onClick={() => {
                    setEditingId(item?.teamId ?? null);
                    setEditName(item.teamName || '');
                    setEditDescription(item.description || '');
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>


      <h3>Add New Item</h3>
      <input
        type="text"
        placeholder="Name"
        value={newTeamName}
        onChange={(e) => setNewTeamName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        onClick={() =>
          createMutation.mutate({ teamName: newTeamName, description: newDescription })
        }
        disabled={createMutation.status === 'pending'}
      >
        Add Item
      </button>
    </div>
  );
};

