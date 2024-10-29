import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@/styles/global.css'
import '@/styles/typography.css'
import LikeContextProvider from "@/context/LikedContext.jsx";
import {UserProvider} from "@/context/UserContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <LikeContextProvider>
                <App/>
            </LikeContextProvider>
        </UserProvider>
    </StrictMode>,
)
