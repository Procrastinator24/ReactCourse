import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Подключаем стили

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link className="header-logo" to="/home">
                    PetShop
                </Link>
                <div className="header-links">
                    <Link className="header-link" to="/catalog">
                        Каталог
                    </Link>
                    <Link className="header-link" to="/cart">
                        Корзина
                    </Link>
                    <Link className="header-link" to="/profile">
                        Профиль
                    </Link>
                </div>
            </nav>
        </header>
    );
};
export default Header;