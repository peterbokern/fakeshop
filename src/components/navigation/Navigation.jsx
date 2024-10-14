import './Navigation.css';
import CategoryMenu from "@/components/navigation/CategoryMenu.jsx";
import BurgerMenu from "@/components/navigation/BurgerMenu.jsx";
import NavigationActions from "@/components/navigation/NavigationActions.jsx";

//static categories, will be replaced by api call to fetch categories.
const categories = ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];

const Navigation = () => {

    return (
        <div className="navigation">
                <BurgerMenu categories={categories} />
                <CategoryMenu categories={categories} />
                <NavigationActions/>
        </div>
    );
};

export default Navigation;


