import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

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
            toast.success('User created successfully:');

            // Redirect to the login page after successful user creation
            navigate('/login');
            return response.data;
        } catch (error) {
            toast.error('Error creating user:', error.response?.data);
            throw error;
        }
    };
};
