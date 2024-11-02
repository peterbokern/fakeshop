import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@/styles/global.css'
import '@/styles/typography.css'
import LikeContextProvider from "@/context/LikedContext.jsx";
import {UserProvider} from "@/context/UserContext.jsx";
import ShoppingProvider from "@/context/ShoppingCartContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <ShoppingProvider>
                <LikeContextProvider>
                    <App/>
                </LikeContextProvider>
            </ShoppingProvider>
        </UserProvider>
    </StrictMode>,
)
