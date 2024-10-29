import {createContext, useState} from 'react';
import {login, logout, getUserCredentials} from "@/utils/authenticate.js";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const {initialUserName, initialAuthToken } = getUserCredentials();
    const [username, setUsername] = useState(initialUserName || null);
    const [authToken, setAuthToken] = useState(initialAuthToken || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!initialAuthToken);

    // Centralized login function that updates localStorage and state
    const loginUser = (username, token) => {
        login(username, token) //to local storage
        setUsername(username);
        setAuthToken(token);
        setIsAuthenticated(true);
    };

    // Centralized logout function that clears localStorage and state
    const logoutUser = () => {
        logout(); // remove from local storage
        setUsername(null);
        setAuthToken(null);
        setIsAuthenticated(false);
    };

    return (
        <UserContext.Provider value={{username, authToken, isAuthenticated, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
};
