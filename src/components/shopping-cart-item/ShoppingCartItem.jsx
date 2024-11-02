
import useShoppingCartItem from "@/hooks/useShoppingCartItem";
import "./ShoppingCartItem.css";
import QuantitySelector from "@/components/quantitiy-selector/QuantitySelector.jsx";

const ShoppingCartItem = ({ product }) => {
    const { quantity, handleIncrement, handleDecrement, handleValueChange } = useShoppingCartItem(product);

    return (
        <div className="shopping-cart-item">
            <div className="shopping-cart-item__image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="shopping-cart-item__details">
                <p className="shopping-cart-item__title">{product.title}</p>
                <p className="shopping-cart-item__price">Price: ${product.price.toFixed(2)}</p>
            </div>
            <div className="shopping-cart-item__quantity">
                <QuantitySelector
                    quantity={quantity}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleValueChange={handleValueChange}
                />
            </div>
            <div className="shopping-cart-item__total-price">
                Total: ${(quantity * product.price).toFixed(2)}
            </div>
        </div>
    );
};

export default ShoppingCartItem;
