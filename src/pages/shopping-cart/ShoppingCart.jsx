import { useContext, useMemo } from "react";
import { ShoppingContext } from "@/context/ShoppingCartContext.jsx";
import ShoppingCartItem from "@/components/shopping-cart-item/ShoppingCartItem.jsx";
import "./ShoppingCart.css";
import Button from "@/components/button/Button.jsx";
import { useProducts } from "@/hooks/useProducts.js";

const ShoppingCart = () => {
    const { cart } = useContext(ShoppingContext) || {};
    const { data, loading } = useProducts() || {};

    const cartItems = useMemo(() => {
        return data && cart ? data.filter((item) => cart[item.id]) : [];
    }, [data, cart]);

    if (loading) {
        return null;
    }

    return (
        <div className="container">
            <h1 className="shopping-cart__title">Shopping Cart</h1>
            <div className="shopping-cart">
                {cartItems.length > 0 ? (
                    cartItems.map((product) => (
                        <ShoppingCartItem key={product.id} product={product} />
                    ))
                ) : (
                    <p className="shopping-cart__empty">Your shopping cart is empty!</p>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="shopping-cart__checkout">
                    <div className="shopping-cart__total">
                        <span className="shopping-cart__total-label">Total: </span>
                        <span className="shopping-cart__total-value">
                            ${cartItems.reduce((total, item) => total + item.price * cart[item.id], 0).toFixed(2)}
                        </span>
                    </div>
                    <Button onClick={() => console.log("This function is not yet available.")} className="shopping-cart__checkout-button">
                        Checkout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
