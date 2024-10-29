import { NavLink } from 'react-router-dom';
import "./LoginPage.css";
import UserForm from "@/components/userform/UserForm.jsx";
import { useApiLogin } from "@/hooks/useApiLogin.js";

const Login = () => {
    const apiLogin = useApiLogin();

    // Fields for the UserForm
    const fields = [
        {
            name: 'username',
            type: 'text',
            label: 'Username',
            validation: { required: 'Username is required' },
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            validation: { required: 'Password is required' }
        },
    ];

    // Pass apiLogin as the onSubmit handler
    return (
        <div className="login-page__container">
            <div className="login-page__form">
                <UserForm formTitle="Login" onSubmit={apiLogin} fields={fields} buttonText="Login" />
                <span className="login-page__link">
                    <p className="login-page__text">
                        New here? <NavLink className="login-page__text-link" to="/create-account"><strong>Click here</strong></NavLink> to create an account.
                    </p>
                </span>
            </div>
        </div>
    );
};

export default Login;
