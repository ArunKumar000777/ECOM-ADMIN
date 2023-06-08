import { apiClient } from "./apiConfig";

export const getAllProducts = async () => {
    try {
        const response = await apiClient.get("/product");
        return response.data;
    } catch (error) {
        return error;
    }
};
export const createProduct = async (userData) => {
    try {
        const response = await apiClient.post("/product", userData, { headers: { "Content-Type": "multipart/form-data" } });
        return response.data;
    } catch (error) {
        console.log("ERROR", error.response.data);
        alert(JSON.stringify(error.response.data));
        throw new Error("Error creating user");
    }
};
