import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Burger from "../components/BurgerMenu/Burger";
import Loader from "../components/Loader/Loader";
import "../styles/style.css";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Burger/>
            <Loader/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;