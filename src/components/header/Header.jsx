import './Header.css';
import User from "../../assets/user.svg?react";
import Logo from "../../assets/brand-logo.svg?react";

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Logo className="header__logo"/>
                <div className="header__login-container">
                    <User className="header__user-icon"/>
                    <p className="header__login">Login</p>
                </div>
            </div>
        </header>
    );
};

export default Header;