import { useParams } from "react-router-dom";
import "./ProductPage.css";
import AddToShoppingCart from "@/components/add-to-shopping-cart/AddToShoppingCart.jsx";
import LikeButton from "@/components/like-button/LikeButton.jsx";
import { useProducts } from "@/hooks/useProducts.js";
import {toast} from "react-toastify";

const ProductPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useProducts();

    if (!data || data.length === 0) {
        return null
    }

    const product = data.find(product => product.id === parseInt(id, 10));

    if (!product) {
        console.log("No product with id " + id);
    }

    if (error) {
        toast.error("Products could not be loaded");
    }

    return (
        <div className="container product-page">
            <div className="product-page__image-container">
                <img src={product.image} alt="product" className="product-page__image" />
            </div>

            <div className="product-page__content">
                <LikeButton id={product.id} className="product-page__like-button" />
                <h2 className="product-page__title">{product.title}</h2>
                <p className="product-page__price">€{product.price}</p>
                <p className="product-page__rating">Rating: {product.rating.rate}</p>
                <p className="product-page__description">{product.description}</p>

                <AddToShoppingCart productId={product.id} className="product-page__add-to-cart" />
            </div>
        </div>
    );
};

export default ProductPage;
