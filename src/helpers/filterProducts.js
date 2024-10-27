
export const filterProducts = (products, priceRange, ratingRange) => {
    return products.filter(
        (item) =>
            item.price >= priceRange[0] &&
            item.price <= priceRange[1] &&
            item.rating.rate >= ratingRange[0] &&
            item.rating.rate <= ratingRange[1]
    );
};
