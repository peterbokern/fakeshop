// BurgerMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'; // Import menu library, assuming you're using `react-burger-menu`
import './BurgerMenu.css'; // Optional: Import styles if needed

const BurgerMenu = ({ menuOpen, categories, handleMenuStateChange, closeMenu }) => {
    return (
        <div className="navigation__burger-menu">
            <Menu left noOverlay isOpen={menuOpen} onStateChange={handleMenuStateChange}>
                {categories &&
                    categories.map((category) => (
                        <NavLink
                            key={category.name + '-' + category.id}
                            to={`/category/${category}`}
                            className="navigation__menu-item"
                            onClick={closeMenu}
                        >
                            {category}
                        </NavLink>
                    ))}
            </Menu>
        </div>
    );
};

export default BurgerMenu;
