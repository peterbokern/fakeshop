import React, { createContext, useState, useEffect, useContext } from 'react';
import getUserInfo from '@/utils/getUserInfo';
import updateUserInfo from '@/utils/updateUserInfo';
import { UserContext } from '@/context/UserContext.jsx';

export const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
    const [cart, setCart] = useState({}); // Local state to hold the shopping cart items
    const { username, isAuthenticated } = useContext(UserContext); // Get username and isAuthenticated from UserContext

    // Function to initialize the cart state from the backend
    const initializeCartFromBackend = async () => {
        try {
            // Fetch the user info from the backend to initialize the cart state only if the user is authenticated
            if (isAuthenticated) {
                const fetchedUserInfo = await getUserInfo();

                if (fetchedUserInfo && fetchedUserInfo.info) {
                    const parsedInfo = JSON.parse(fetchedUserInfo.info);
                    if (parsedInfo && typeof parsedInfo === 'object') {
                        setCart(parsedInfo); // Set the parsed cart data to state
                        console.log("Cart initialized from backend:", parsedInfo);
                    }
                }
            }
        } catch (error) {
            console.error("Failed to fetch or parse user info:", error);
        }
    };

    // Use an effect to initialize the cart state whenever the user logs in or their username changes
    useEffect(() => {
        if (isAuthenticated) {
            initializeCartFromBackend();
        }
    }, [username, isAuthenticated]); // Re-run when username or isAuthenticated changes

    // Use another effect to clear the cart state when the user logs out
    useEffect(() => {
        if (!isAuthenticated) {
            setCart({}); // Clear the cart when the user logs out
            console.log("Cart cleared on logout");
        }
    }, [isAuthenticated]); // This effect will trigger when `isAuthenticated` changes

    // Function to update the quantity of items in the cart and sync with backend
    const updateQuantity = async (id, quantity) => {
        setCart(prevCart => {
            const oldQuantity = prevCart[id] || 0;
            const newQuantity = oldQuantity + quantity;

            // Create an updated cart object
            const updatedCart = {
                ...prevCart,
                [id]: newQuantity,
            };

            // Sync the updated cart with the backend using updateUserInfo
            updateUserInfo(updatedCart); // No need to await here, fire-and-forget pattern

            return updatedCart;
        });
    };

    return (
        <ShoppingContext.Provider value={{ cart, updateQuantity }}>
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingProvider;
