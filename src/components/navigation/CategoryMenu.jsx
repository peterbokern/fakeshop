import { NavLink } from 'react-router-dom';
import './CategoryMenu.css';

//static categories, will be replaced by api call to fetch categories.
const categories = ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];

const CategoryMenu = () => {

    return (
        <div className="category__menu">
            {categories.map((category) => (
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
