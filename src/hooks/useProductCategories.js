import { useState, useEffect } from "react";
import { getProductCategories } from "@/utils/getProductCategories";

const useCategories = () => {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCategories = async (controller) => {
        try {
            const fetchedCategories = await getProductCategories(controller);
            setCategories(fetchedCategories);

        } catch (error) {
            // handle abort
            if (controller.signal.aborted) return;

            // Handle error
            setError(error.message);

        } finally {
            setLoading(false);
        }
    };

    // useEffect to call fetchCategories
    useEffect(() => {
        const controller = new AbortController();

        // Call the fetchCategories function
        fetchCategories(controller);

        // Cleanup function to abort the fetch if the component is unmounted
        return () => {
            controller.abort();
        };
    }, []);

    return { categories, loading, error };
};

export default useCategories;