import axios from "axios";

export const getProducts = async (abortController) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products", { signal: abortController.signal });
        return response.data;
    } catch (error) {
        if (!axios.isCancel(error)) {
            throw new Error(`Failed to fetch products: ${error.message}`);
        }
        return []; // Return empty array if request is canceled
    }
};
