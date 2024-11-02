import "./CategoryPage.css";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SliderFilter from "@/components/slider-filter/SliderFilter";
import SortingBar from "@/components/sorting-bar/SortingBar.jsx";
import SearchBar from "@/components/search/SearchBar.jsx";
import ProductItem from "@/components/product-item/ProductItem.jsx";
import useFilteredAndSortedProducts from "@/hooks/useFilteredAndSortedProducts";
import { useProducts } from "@/hooks/useProducts.js";
import { toast } from "react-toastify";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { data, error, loading } = useProducts() || {};

    // Sorting states
    const sortingOptions = ['Price', 'Rating', 'Title'];
    const [sortBy, setSortBy] = useState("price");
    const [isAscending, setIsAscending] = useState(true);

    // filter states
    const [rangePriceValues, setRangePriceValues] = useState([0, 1000]);
    const [rangeRatingValues, setRangeRatingValues] = useState([0, 5]);
    const [searchQuery, setSearchQuery] = useState('');

    // Handle price range changes
    const handlePriceRangeChange = (value) => {
        setRangePriceValues(value);
    };

    // Handle rating range changes
    const handleRatingRangeChange = (value) => {
        setRangeRatingValues(value);
    };

    const toggleSortOrder = () => setIsAscending((prevState) => !prevState);
    const handleOnChangeSortBy = (e) => setSortBy(e.target.value);

    // Use the custom hook to get the sorted products and max values
    const { sortedProducts, maxPrice, maxRating } = useFilteredAndSortedProducts(
        data,
        categoryName,
        sortBy,
        isAscending,
        rangePriceValues,
        rangeRatingValues,
        searchQuery
    );

    if (loading) {
        return null;
    }

    if (error) {
        toast.error("Products could not be loaded.");
    }

    return (
        <main className="category-page container">
            <h1 className="category-page__title">{categoryName}</h1>
            <div className="category-page__container">
                <aside className="category-page__filter-pane">
                    <SliderFilter
                        label="Price Range"
                        rangeValues={rangePriceValues}
                        dynamicMax={maxPrice}
                        handleRangeChange={handlePriceRangeChange}
                    />
                    <SliderFilter
                        label="Rating Range"
                        rangeValues={rangeRatingValues}
                        dynamicMax={maxRating}
                        handleRangeChange={handleRatingRangeChange}
                    />
                </aside>
                <section className="category-page__content">
                    <div className="category-page__sort-bar">
                        <p className="category-page__items-found">
                            {sortedProducts.length + " items found"}
                        </p>
                        <SearchBar onSearch={setSearchQuery}/>
                        <SortingBar
                            isAscending={isAscending}
                            sortBy={sortBy}
                            sortingOptions={sortingOptions}
                            onChangeSortBy={handleOnChangeSortBy}
                            onToggleSortOrder={toggleSortOrder}
                        />
                    </div>

                    {/* Render the sorted products */}
                    <section className="category-page__product-list">
                        {sortedProducts.map((product) => (
                            <ProductItem key={product.id} product={product}/>
                        ))}
                    </section>
                </section>
            </div>
        </main>
    );
};

export default CategoryPage;
