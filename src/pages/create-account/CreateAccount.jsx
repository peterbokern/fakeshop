
import UserForm from "@/components/userform/UserForm.jsx";
import "./CreateAccount.css"
import {useApiCreateUser} from "@/hooks/useApiCreateUser.js";

const CreateAccount = () => {

    const createUser = useApiCreateUser();

    //fields for userform
    const fields = [
        {
            name: 'username',
            type: 'text',
            label: 'Username',
            validation: { required: 'Username is required.' }
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email Address',
            validation: {
                required: 'Email is required.',
                pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Invalid email address.' }
            }
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            validation: {
                required: 'Password is required.',
                minLength: { value: 6, message: 'At least 6 characters.' },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: 'Must include uppercase, lowercase, number, and special character.'
                }
            }
        }
    ];

    return (
        <div className="create-account__container">
            <UserForm
                formTitle="Create Account"
                onSubmit={createUser}
                fields={fields}
                buttonText="Create Account"/>
        </div>)
};

export default CreateAccount;
