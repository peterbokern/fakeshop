
import "./ProductItem.css";
import LikeButton from "@/components/like-button/LikeButton.jsx";
import {useNavigate} from "react-router-dom";

const ProductItem = ({ product }) => {
    const navigate = useNavigate();
    const handleClick = ({id}) => {
        navigate(`/product/${id}`); //go to product page
    }

    if (!product) {
        return null;
    }

    return (
        <article className="product-item" key={product.id} >
            <div className="product-item__image-container" onClick={()=>handleClick(product)}>
                <img className="product-item__image" src={product.image} alt="product" />
            </div>
            <div className="product-item__details">
                <p><strong>{product.title}</strong></p>
                <p className="product-item__description">{product.description}</p>
                <p className="product-item__rating">Rating: {product.rating.rate}</p>
            </div>
            <div className="product-item__buy">
                <LikeButton className="product-item__like-button" id={product.id} />
                <p className="product-item__price">${product.price}</p>
                {/*<AddToShoppingCart productId={product.id} placeholder/>*/}
            </div>
        </article>
    );
};

export default ProductItem;
