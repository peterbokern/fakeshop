import {LikeContext} from "@/context/LikedContext.jsx";
import {useContext, useMemo} from "react";
import ProductItem from "@/components/product-item/ProductItem.jsx";
import {useProducts} from "@/hooks/useProducts.js";
import "./LikedPage.css"
import {UserContext} from "@/context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const LikedPage = () => {

    const {likes} = useContext(LikeContext) || null
    const {data} = useProducts() || null;

    const likedItems = useMemo(() => {
        if (data && likes) {
            return data.filter(item => likes.includes(item.id));
        }
        return [];
    }, [data, likes]);

    return (
        <div className="container">
            <h1>Liked Products</h1>
            <div className="liked-products">
                {likedItems.length > 0  ?
                    likedItems.map(product => (
                        <ProductItem key={product.id} product={product}/>))
                    :
                    <p className="liked-products__empty">You have 0 liked items</p>
                }
            </div>
        </div>
    );
};

export default LikedPage;
