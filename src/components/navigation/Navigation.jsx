import './Navigation.css';
import CategoryMenu from "@/components/navigation/CategoryMenu.jsx";
import BurgerMenu from "@/components/navigation/BurgerMenu.jsx";
import NavigationActions from "@/components/navigation/NavigationActions.jsx";
import useProductCategories from "@/hooks/useProductCategories.js";
import {useLocation} from "react-router-dom";

const Navigation = () => {
    const {categories} = useProductCategories()
    const location = useLocation();
    const hide = location.pathname === '/login' || location.pathname === '/create-account';

    if (hide) return null

    return (
        <div className="navigation">
                <BurgerMenu categories={categories} />
                <CategoryMenu categories={categories} />
                <NavigationActions/>
        </div>
    );
};

export default Navigation;
