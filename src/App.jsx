import './App.css'
import Header from "./components/header/Header.jsx";
import Navigation from './components/navigation/Navigation.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from "@/pages/category-page/CategoryPage.jsx";
import Home from "@/pages/home/Home.jsx";
import ProductPage from "@/pages/product-page/ProductPage.jsx";
import LikedPage from "@/pages/liked-page/LikedPage.jsx";
import LoginPage from "@/pages/login-page/LoginPage.jsx";
import CreateAccount from "@/pages/create-account/CreateAccount.jsx";

const App = () => {

    return (
        <>
            <Router>
                <Header/>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<ProductPage/>}/>
                    <Route path="/category/:categoryName" element={<CategoryPage/>}/>
                    <Route path="/likes" element={<LikedPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/create-account" element={<CreateAccount/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
