import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">Star DB</div>
            <ul className="header__list">
                <li className="header__list-item"><Link to="/people/">People</Link></li>
                <li className="header__list-item"><Link to="/planet/">Planets</Link></li>
                <li className="header__list-item"><Link to="/starship/">Starships</Link></li>
            </ul>
        </header>
    );
};

export default Header;