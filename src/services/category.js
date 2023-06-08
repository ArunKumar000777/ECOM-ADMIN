import { apiClient } from "./apiConfig";

export const getAllCategory = async () => {
    try {
        const response = await apiClient.get("/category");
        return response.data;
    } catch (error) {
        alert(JSON.stringify(error.response.data));
        return error;
    }
};
