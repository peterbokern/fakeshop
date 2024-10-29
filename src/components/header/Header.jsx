import './Header.css';
import User from "../../assets/user.svg?react";
import Logo from "../../assets/brand-logo.svg?react";
import {useContext} from "react";
import {UserContext} from "@/context/UserContext.jsx";
import {NavLink} from "react-router-dom";

const Header = () => {

    const { username, logoutUser } = useContext(UserContext);

    // Custom logout handler to display goodbye toast
    const handleLogout = () => {
        console.log(`Goodbye, ${username}!`);
        logoutUser();
    };

    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/">
                    <Logo className="header__logo"/>
                </NavLink>
                <div className="header__login-container">
                    <User className="header__user-icon"/>
                    {username ? (
                        <div className="header__user-info">
                            <span className="header__username">{username}</span>
                            <button className="header__button header__button--logout" onClick={handleLogout}>Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink className="header__button header__button--login" to="/login">Login</NavLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;