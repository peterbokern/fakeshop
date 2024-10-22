import {useEffect, useState} from "react";
import ProductCarousel from "@/components/product-carousel/ProductCarousel.jsx";
import {useProducts} from "@/hooks/useProducts.js";
import "./Home.css"

const Home = () => {

    const {data, loading, error} = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            setFilteredProducts(data);
        }
    }, [data]);

    if (error) {
        console.log(error);
    }

    if (!filteredProducts || loading) {
        return null
    }

    return (
        <div className="home-container">
            <div className="container">
                <h1>Onze Producten</h1>
                <ProductCarousel products={filteredProducts}/>
            </div>
        </div>
    );
};

export default Home;
