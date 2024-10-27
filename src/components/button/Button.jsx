
import "./Button.css";

const Button = ({ children, type, onClick, className = "", ...props }) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
