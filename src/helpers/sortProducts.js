
const sortProducts = (products, sortBy, isAscending) => {
    return [...products].sort((a, b) => {
        let aValue, bValue;

        // Handle nested rating value
        if (sortBy === "rating") {
            aValue = a.rating.rate;
            bValue = b.rating.rate;
        } else {
            aValue = a[sortBy];
            bValue = b[sortBy];
        }

        // Sorting logic
        if (isAscending) {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });
};

export default sortProducts;