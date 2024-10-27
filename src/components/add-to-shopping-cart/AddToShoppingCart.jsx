
import QuantitySelector from '@/components/quantitiy-selector/QuantitySelector.jsx';
import ShoppingCart from '../../../../../REACT/fakeshop/src/assets/shopping-cart.svg?react';
import Button from '@/components/button/Button.jsx';
import './AddToShoppingCart.css';

const AddToShoppingCart = ({ productId }) => {

    return (
        <form className="add-to-cart__product-form" onSubmit={ ()=>"add to cart"}>
            {/* Quantity Selector for Increment and Decrement Buttons */}
            <QuantitySelector
                quantity={'1'} //placeholder
                handleIncrement={()=> console.log("increment")} //placeholder
                handleDecrement={()=> console.log("decrement")} //placeholder
            />
            {/* Add to Cart Button */}
            <Button type="submit" className="add-to-cart__button add-to-cart__button:hover">
                <ShoppingCart className="add-to-cart__icon" />
            </Button>
        </form>
    );
};

export default AddToShoppingCart;
