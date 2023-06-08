import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1/";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
});
