import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";


export default function App() {
    return (
        <div className="flex flex-col h-screen">
            <NavBar/>
            <main className="flex flex-grow"> 
                <Home/>
            </main>
            <Footer />
        </div>
    )
}