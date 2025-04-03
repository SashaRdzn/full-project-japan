import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src='/images/logo2.svg' alt="logo" />
                <Link to="/" className="header__logo__p link">Guide Tokio</Link>
            </div>
            <nav className="header__nav">
                <Link to="/contacts" className="link">Контакты</Link>
                <Link to="/catalog" className="link">Достопримечательности</Link>
            </nav>
        </header>
    );
};

export default Header;      