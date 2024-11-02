
import { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "@/context/ShoppingCartContext.jsx";

const useShoppingCartItem = (product) => {
    const { cart, updateQuantity } = useContext(ShoppingContext);
    const [quantity, setQuantity] = useState(0);

    // Sync the local quantity state with the cart context when the component mounts or cart changes
    useEffect(() => {
        if (cart[product.id] !== undefined) {
            setQuantity(cart[product.id]);
        }
    }, [cart, product.id]);

    // Increment the local quantity state and update the context
    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        updateQuantity(product.id, 1);
    };

    // Decrement the local quantity state and update the context
    const handleDecrement = () => {
        if (quantity >= 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            updateQuantity(product.id, -1);
        }
    };

    // Change quantity value
    const handleValueChange = (e) => {
        const newValue = parseInt(e.target.value, 10) || 0; // Fallback to 0 if value is not a number
        setQuantity(newValue);
        updateQuantity(product.id, newValue - quantity); // Update context with the difference
    };

    return {
        quantity,
        handleIncrement,
        handleDecrement,
        handleValueChange,
    };
};

export default useShoppingCartItem;
