
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../../../src/assets/shopping-cart.svg?react';
import LikeIcon from '../../assets/like.svg?react';
import './NavigationActions.css';

const NavigationActions = ({totalProductCount}) => {

    return (
        <div className="navigation__actions">
            <NavLink to="/likes" className="navigation__icon navigation__icon--favorite">
                <LikeIcon className="navigation__icon-like" />
            </NavLink>

            <NavLink to="/shopping-cart" className="navigation__icon navigation__icon--cart">
                <ShoppingCart className="navigation__icon-shopping-cart" />
                {totalProductCount > 0 && (
                    <span className="navigation__cart-count">{totalProductCount}</span>
                )}
            </NavLink>
        </div>
    );
};

export default NavigationActions;
