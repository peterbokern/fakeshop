
import axios from 'axios';

const updateUserInfo = async (info) => {
    const username = localStorage.getItem('username'); // Retrieve the username from local storage
    const authToken = localStorage.getItem('authToken'); // Retrieve the auth token
    const apiKey = import.meta.env.VITE_NOVI_API_KEY; // Get the API key from environment variables

    if (!username || !authToken) {
        console.log("User is not logged in.");
        return;
    }

    try {
        console.log("Sending updated info to server:", info);

        // Make the PUT request to update the user's info
        const response = await axios.put(
            `https://api.datavortex.nl/fakeshop/users/${username}`,
            { info: JSON.stringify(info) }, // Convert info to JSON string if it's an object or array
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                    'X-Api-Key': apiKey,
                },
            }
        );

        // Log status code and entire response
        console.log("Request Status Code:", response.status); // Log the status code
        console.log("Response Data:", response.data); // Log the response data

    } catch (error) {
        console.error("Failed to update user info:", error);
        console.log("There was an error updating user:", error);
    }
};

export default updateUserInfo;
