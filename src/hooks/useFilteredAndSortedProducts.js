import { useMemo, useEffect, useState } from 'react';
import { filterProducts } from '@/helpers/filterProducts.js';
import sortProducts from '@/helpers/sortProducts.js';
import { filterByCategory } from '@/helpers/filterByCategory.js';
import { calculateDynamicMaxValues } from '@/helpers/calculateDynamicMaxValues.js';

const useFilteredAndSortedProducts = (data, categoryName, sortBy, isAscending, rangePriceValues, rangeRatingValues, searchQuery) => {
    // State to store max values for price and rating
    const [maxPrice, setMaxPrice] = useState(1000);
    const [maxRating, setMaxRating] = useState(5);

    // 1. Filter data based on category
    const filteredByCategory = useMemo(() => {
        return categoryName && data ? filterByCategory(data, categoryName) : [];
    }, [data, categoryName]);

    // 2. Calculate dynamic max values using helper function
    useEffect(() => {
        const { maxPrice: maxP, maxRating: maxR } = calculateDynamicMaxValues(filteredByCategory);
        setMaxPrice(maxP);
        setMaxRating(maxR);
    }, [filteredByCategory]);

    // 3. Filter products based on price, rating ranges, and search query
    const filteredProducts = useMemo(() => {
        let result = filterProducts(filteredByCategory, rangePriceValues, rangeRatingValues);

        // If there is a search query, further filter the products by title or description
        if (searchQuery) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return result;
    }, [filteredByCategory, rangePriceValues, rangeRatingValues, searchQuery]);

    // 4. Sort products
    const sortedProducts = useMemo(() => sortProducts(filteredProducts, sortBy, isAscending), [filteredProducts, sortBy, isAscending]);

    return { sortedProducts, maxPrice, maxRating };
};

export default useFilteredAndSortedProducts;
