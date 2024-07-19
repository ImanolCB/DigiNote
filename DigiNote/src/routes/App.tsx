import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'


export default function App() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/" Component={Login}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
        
    )
}