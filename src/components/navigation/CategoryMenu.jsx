import { NavLink } from 'react-router-dom';
import './CategoryMenu.css';

const CategoryMenu = ({categories}) => {

    return (
        <div className="category__menu">
            {categories && categories.map((category) => (
                <NavLink
                    key={category}
                    to={`/category/${category}`}
                    className={({ isActive }) =>
                        isActive
                            ? 'category__menu-link category__menu-link--active'
                            : 'category__menu-link'
                    }
                >
                    {category}
                </NavLink>
            ))}
        </div>
    );
};

export default CategoryMenu;
