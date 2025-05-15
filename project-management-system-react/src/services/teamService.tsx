//THIS HANDLE ALL API CALLS RELATED TO TEAMS
//THIS FILE IS FOR API CALLS ONLY, NO LOGIC OR STATE MANAGEMENT

import { Team } from '../types/team';
import api from './api'

const getTeams = async(): Promise<Team[]> => {  
  var response =await api.get<Team[]>('api/Team/Get');
  return response.data;
};

const getTeamById = async(id): Promise<Team> => {
  var response = await api.get<Team>(`api/Team/GetById/${id}`);
  return response.data;
};

//Omit removes Id from teamData to prevent error when creating new team
const createTeam = async(teamData: Omit<Team,'teamId'>): Promise<Team> => {
  var response = await api.post<Team>('api/Team/Create', teamData);
  return response.data;
};

const updateTeam = async(userData) : Promise<Team> => {
  var response = await api.put<Team>(`api/Team/Update`, userData);
  return response.data;
};

export { getTeams, getTeamById, createTeam, updateTeam };

