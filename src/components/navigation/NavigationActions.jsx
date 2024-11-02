import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/context/UserContext.jsx';
import ShoppingCart from '../../../src/assets/shopping-cart.svg?react';
import LikeIcon from '../../assets/like.svg?react';
import './NavigationActions.css';
import { toast } from 'react-toastify';

const NavigationActions = ({ totalProductCount }) => {
    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLikeClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault(); // Prevent navigation if not logged in
            toast.warning('Login to view your liked items');
        } else {
            navigate('/likes');
        }
    };

    const handleCartClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault(); // Prevent navigation if not logged in
            toast.warning('Login to view your shopping cart');
        } else {
            navigate('/shopping-cart');
        }
    };

    return (
        <div className="navigation__actions">
            <button
                onClick={handleLikeClick}
                className="navigation__icon navigation__icon--favorite"
                aria-label="View Liked Items"
            >
                <LikeIcon className="navigation__icon-like" />
            </button>

            <button
                onClick={handleCartClick}
                className="navigation__icon navigation__icon--cart"
                aria-label="View Shopping Cart"
            >
                <ShoppingCart className="navigation__icon-shopping-cart" />
                {totalProductCount > 0 && (
                    <span className="navigation__cart-count">{totalProductCount}</span>
                )}
            </button>
        </div>
    );
};

export default NavigationActions;
