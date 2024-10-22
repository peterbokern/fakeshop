import './ProductCard.css'
import { useNavigate} from "react-router-dom";

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const handleClick = ({id}) => {
        navigate(`/product/${id}`);
    }
    return (
        <>
            <article className="product" onClick={(()=>handleClick(product))}>
                <div className="product__image-container">
                    <img className="product__image" src={product.image} alt="product-image"/>
                </div>
                <div className="product__details">
                    <p className="product__subtext">Recommended</p>
                    <h2 className="product__title">{product.title}</h2>
                    <p className="product__price">{'€' + product.price}</p>
                </div>
            </article>
        </>
    )
}

export default ProductCard;