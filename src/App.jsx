import './App.css'
import Header from "./components/header/Header.jsx";
import Navigation from './components/navigation/Navigation.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from "@/pages/category-page/CategoryPage.jsx";
import Home from "@/pages/home/Home.jsx";

const App = () => {

    return (
        <>
            <Router>
                <Header/>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category/:categoryName" element={<CategoryPage/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
