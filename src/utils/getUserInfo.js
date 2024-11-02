
import axios from 'axios';

const getUserInfo = async () => {
    const username = localStorage.getItem('username'); // Retrieve the username from local storage
    const authToken = localStorage.getItem('authToken'); // Retrieve the auth token
    const apiKey = import.meta.env.VITE_NOVI_API_KEY;

    if (!username || !authToken) {
        console.log("Gebruiker is niet ingelogd. Kan gebruikersinformatie niet ophalen.");
        return null;
    }

    try {
        console.log("Fetching user info for:", username);

        const response = await axios.get(
            `https://api.datavortex.nl/fakeshop/users/${username}`,
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                    'X-Api-Key': apiKey,
                },
            }
        );

        console.log("User info fetched successfully:", response.data);

        return response.data;
    } catch (error) {
        console.error("Failed to fetch user info:", error);
        return null;
    }
};

export default getUserInfo;
