import { useState } from 'react';
import { Link } from 'react-router-dom';

const Burger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="burger-menu">
            <div className="burger-icon" id="burger-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <nav className={`menu ${isMenuOpen ? 'active' : ''}`} id="menu">
                <div className="close-icon" id="close-icon" onClick={closeMenu}>
                    &#10006;
                </div>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="/catalog/" onClick={closeMenu}>
                            Достопримечательности
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts/" onClick={closeMenu}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Burger;