
import { useForm } from 'react-hook-form';
import "./UserForm.css";

const UserForm = ({ formTitle, onSubmit, fields, buttonText }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="user-form">
            <h1 className="user-form__title">{formTitle}</h1>
            <form className="user-form__body" onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (
                    <div className="user-form__element" key={field.name}>
                        <label className="user-form__label" htmlFor={field.name}>
                            {field.label}
                        </label>
                        <input
                            id={field.name}
                            type={field.type}
                            className={`user-form__input ${errors[field.name] ? 'user-form__input--error' : ''}`}
                            {...register(field.name, field.validation)}
                        />
                        {errors[field.name] && (
                            <p className="user-form__error-message">{errors[field.name].message}</p>
                        )}
                    </div>
                ))}
                <button type="submit" className="user-form__button">{buttonText}</button>
            </form>
        </div>
    );
};

export default UserForm;
