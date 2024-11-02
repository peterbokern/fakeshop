import { useContext, useState } from 'react';
import { ShoppingContext } from '@/context/ShoppingCartContext.jsx';
import updateUserInfo from '@/utils/updateUserInfo';
import {toast} from "react-toastify";

const useShoppingCart = (productId) => {
    const { cart, updateQuantity } = useContext(ShoppingContext);
    const [quantity, setQuantity] = useState(1);

    // Check if user is logged in
    const isUserLoggedIn = localStorage.getItem('authToken') !== null;

    // Increment quantity locally (not in cart)
    const handleIncrement = (e) => {
        if (e && e.preventDefault) e.preventDefault(); // Prevent form submission if event exists
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    // Decrement quantity locally (not in cart)
    const handleDecrement = (e) => {
        if (e && e.preventDefault) e.preventDefault(); // Prevent form submission if event exists
        if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
    };

    // Add product to cart and update backend
    const handleAddToCart = async (e) => {
        if (e && e.preventDefault) e.preventDefault(); // Prevent form submission if event exists

        // Check if user is logged in
        if (!isUserLoggedIn) {
            toast.warning('Login to use shopping cart!');
            return;
        }

        // Update cart quantity only when "Add to Cart" is pressed
        updateQuantity(productId, quantity);

        // Create an updated cart object with the new quantity
        const updatedCartItems = {
            ...cart,
            [productId]: (cart[productId] || 0) + quantity, // Update or add the product with the quantity
        };

        // Sync the updated cart items with the backend using updateUserInfo
        try {
            await updateUserInfo(updatedCartItems); // Call updateUserInfo to sync with the backend
            toast.success(`Product added to shopping cart.`);
        } catch (error) {
            toast.error('Failed to add product to shopping cart:', error);
        }

        // Reset quantity back to 1 after adding to cart
        setQuantity(1);
    };

    return {
        quantity,
        handleIncrement,
        handleDecrement,
        handleAddToCart,
        isUserLoggedIn,
    };
};

export default useShoppingCart;
