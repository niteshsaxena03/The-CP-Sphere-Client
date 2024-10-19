import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://the-cp-sphere-server-1.onrender.com", // Define the base URL for all requests
});

export default api;
