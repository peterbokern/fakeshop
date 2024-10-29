import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useApiCreateUser = () => {
    const key = import.meta.env.VITE_NOVI_API_KEY;
    const navigate = useNavigate();

    return async (data) => {
        try {
            const response = await axios.post(
                'https://api.datavortex.nl/fakeshop/users',
                { ...data, authorities: [{ authority: 'USER' }] },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': key,
                    },
                }
            );
            console.log('User created successfully:', response.data);

            // Redirect to the login page after successful user creation
            navigate('/login');
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error.response?.data);
            throw error;
        }
    };
};
