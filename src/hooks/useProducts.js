import { useEffect, useState } from "react";
import { getProducts } from "@/utils/getProducts.js";

// Custom hook to fetch and manage product data
export const useProducts = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch product from fakestore API
    const fetchProducts = async (abortController) => {
        setLoading(true);
        try {
            // Call the utility function to fetch products
            const products = await getProducts(abortController);
            setData(products);  // Set the fetched products in state

        } catch (error) {
            // handle abort
            if (abortController.signal.aborted) return;

            // Handle error
            setError(error.message);

        } finally {
            setLoading(false);  // Stop loading once the fetch completes (success or fail)
        }
    };

    // useEffect to fetch data on component mount
    useEffect(() => {
        const abortController = new AbortController();  // AbortController for request cancellation
        fetchProducts(abortController);

        return () => {
            // Clean up for when component unmounts or re-renders
            abortController.abort();
        };
    }, []);  // Empty dependency array --> effect only runs on first mount

    // Return the fetched data, loading status, and error for use in components
    return { data, loading, error };
};
