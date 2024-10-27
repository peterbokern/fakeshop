
export const calculateDynamicMaxValues = (products) => {
    const maxPrice = Math.ceil(Math.max(0, ...products.map((item) => item.price)));
    const maxRating = Math.ceil(Math.max(0, ...products.map((item) => item.rating.rate)));
    return { maxPrice, maxRating };
};
