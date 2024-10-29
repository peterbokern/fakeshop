import axios from "axios";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export const useApiLogin = () => {
    const { loginUser } = useContext(UserContext); // Use loginUser from context
    const navigate = useNavigate();
    const key = import.meta.env.VITE_NOVI_API_KEY;

    // Define the login function to be used by components
    return async (data) => {
        try {
            const response = await axios.post(
                'https://api.datavortex.nl/fakeshop/users/authenticate',
                { username: data.username, password: data.password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': key,
                    },
                }
            );

            if (response.data && response.data.jwt) {
                // Use loginUser to update context and localStorage
                loginUser(data.username, response.data.jwt);

                console.log(`Login successful: Welcome, ${data.username}!`);
                navigate('/');
            }
        } catch (error) {
            switch (error.response?.data) {
                case 'Invalid username/password':
                    console.log('Incorrect username or password.');
                    break;
                case 'User not found':
                    console.log('User not found');
                    break;
                default:
                    console.log('An error occurred, try again');
                    break;
            }
        }
    };
};
