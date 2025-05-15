import { useState } from "react";
import { useCreateTeam, useTeams, useUpdateTeam } from "../hooks/team/useTeams";
import { useQueryClient } from "@tanstack/react-query";

function TeamList(){
    const queryClient = useQueryClient();
    
    const{data: teams, isLoading, error} = useTeams();
    const createMutation = useCreateTeam();
    const updateMutation = useUpdateTeam();

    const[newTeamName, setNewTeamName] = useState('');
    const[newDescription, setNewDescription] = useState('');

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

     return (
  <div>
      <h2>Items</h2>
      <ul>
        {teams?.map((item) => (
          <li key={item.teamId}>
            {editingId === item.teamId ? (
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
            ) : (
              <>
                {item.teamName} - {item.description}
                <button
                  onClick={() => {
                    setEditingId(item.teamId);
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
}

export default TeamList;