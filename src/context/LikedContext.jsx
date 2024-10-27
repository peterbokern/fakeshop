import { createContext, useState, useEffect } from 'react';

export const LikeContext = createContext();

const LikeContextProvider = ({ children }) => {
    // check local storage for like status
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem('likes');
        return storedLikes ? JSON.parse(storedLikes) : [];
    });

    // Update localStorage whenever likes changes
    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(likes));
    }, [likes]);

    // Toggles the like status of a product by its ID
    const toggleLikes = (id) => {
        setLikes((prevLikes) => {
            // Check if the product is already liked
            if (prevLikes.includes(id)) {
                // If liked, remove the product ID from the array
                return prevLikes.filter(like => like !== id);
            } else {
                // If not liked, add the product ID
                return [...prevLikes, id];
            }
        });
    };

    return (
        <LikeContext.Provider value={{ likes, toggleLikes }}>
            {children}
        </LikeContext.Provider>
    );
};

export default LikeContextProvider;
