import './Navigation.css';
import CategoryMenu from "@/components/navigation/CategoryMenu.jsx";
import BurgerMenu from "@/components/navigation/BurgerMenu.jsx";
import NavigationActions from "@/components/navigation/NavigationActions.jsx";
import useProductCategories from "@/hooks/useProductCategories.js";

const Navigation = () => {
    const {categories} = useProductCategories()
    return (
        <div className="navigation">
                <BurgerMenu categories={categories} />
                <CategoryMenu categories={categories} />
                <NavigationActions/>
        </div>
    );
};

export default Navigation;
