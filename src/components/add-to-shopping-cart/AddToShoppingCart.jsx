
import QuantitySelector from '@/components/quantitiy-selector/QuantitySelector.jsx';
import ShoppingCart from '../../../../../REACT/fakeshop/src/assets/shopping-cart.svg?react';
import Button from '@/components/button/Button.jsx';
import './AddToShoppingCart.css';
import useShoppingCart from "@/hooks/useShoppingcart.js";

const AddToShoppingCart = ({ productId }) => {

    const {
        quantity,
        handleIncrement,
        handleDecrement,
        handleAddToCart,
    } = useShoppingCart(productId);

    return (
        <form className="add-to-cart__product-form" onSubmit={handleAddToCart}>
            {/* Quantity Selector for Increment and Decrement Buttons */}
            <QuantitySelector
                quantity={quantity} //placeholder
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
            {/* Add to Cart Button */}
            <Button type="submit" className="add-to-cart__button add-to-cart__button:hover">
                <ShoppingCart className="add-to-cart__icon" />
            </Button>
        </form>
    );
};

export default AddToShoppingCart;
