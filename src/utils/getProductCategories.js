import axios from "axios";

export const getProductCategories= async (controller) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products/categories", { signal: controller.signal });
        return response.data
    } catch (error) {
        if (!axios.isCancel(error)) {
            throw new Error(`Failed to fetch products.`);
        }
        return [];
    }
};