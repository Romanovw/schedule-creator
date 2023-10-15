import { NavLink } from "react-router-dom";
import "./header.css"
import logo from  "./assets/logo.png"
import React, { useState } from 'react';

function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
  
    return (
      <header className={`header ${isDropdownVisible ? 'transparent' : ''}`}>
        <div className="header-container">
          <button className="nav-btn" onClick={toggleDropdown}>•••</button>
          <NavLink to="/posts" className="header-link-logo"><img className="header-logo" src={logo} alt="logo-efes" /></NavLink>
          <nav className={`nav-menu ${isDropdownVisible ? 'dropdown' : ''}`}>
            <ul className="nav-menu-list">
              <li className="nav-item"><NavLink to="/kitchen-basztowa" className="nav-link" activeClassName="active">Kuchnia Basztowa</NavLink></li>
              <li className="nav-item"><NavLink to="/drivers-basztowa" className="nav-link" activeClassName="active">Kierowcy Basztowa</NavLink></li>
              <li className="nav-item"><NavLink to="/kitchen-mackiewicza" className="nav-link" activeClassName="active">Kuchnia Mackiewicza</NavLink></li>
              <li className="nav-item"><NavLink to="/drivers-mackiewicza" className="nav-link" activeClassName="active">Kierowcy Mackiewicza</NavLink></li>
              <li className="nav-item"><button className="drop-close-btn" onClick={toggleDropdown}></button></li>
            </ul>
          </nav>
        </div>
        <div className={`header-blur ${isDropdownVisible ? '' : 'hidden'}`} onClick={toggleDropdown}></div>
      </header>
    );
}

export default Header;