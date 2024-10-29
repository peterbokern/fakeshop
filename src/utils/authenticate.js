
export const login = (username, token) => {
    localStorage.setItem('username', username);
    localStorage.setItem('authToken', token);
};

export const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
};

export const getUserCredentials = () => {
    const initialUserName = localStorage.getItem('username');
    const initialAuthToken = localStorage.getItem('authToken');
    return { initialUserName, initialAuthToken };
};

