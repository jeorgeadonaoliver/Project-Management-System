//USING AXIOS FOR API CALLS
// THIS FILE HANDLES ALL API CALLS RELATED TO TEAMS

import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7143/", // Replace with actual API URL
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default api;