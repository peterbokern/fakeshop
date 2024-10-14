import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../../../src/assets/shopping-cart.svg?react';
import LikeIcon from '../../assets/like.svg?react';
import './NavigationActions.css';

const NavigationActions = () => {
    //Static product count, to be replaced with actual function
    const totalProductCount = 1
    return (
        <div className="navigation__actions">
            <NavLink to="/likes" className="navigation__icon navigation__icon--favorite">
                <LikeIcon className="navigation__icon-like" />
            </NavLink>

            <NavLink to="/shopping-cart" className="navigation__icon navigation__icon--cart">
                <ShoppingCart className="navigation__icon-shopping-cart" />
                    <span className="navigation__cart-count">{totalProductCount}</span>
            </NavLink>
        </div>
    );
};

export default NavigationActions;
