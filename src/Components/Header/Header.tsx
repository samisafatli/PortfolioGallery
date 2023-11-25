import React, { useState } from "react";
import "./Header.style.css";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav__brand">
        <TheaterComedyIcon style={{ fontSize:"45px" }} />
      </a>
      <ul className={`nav__menu ${isNavExpanded ? "nav__active" : ""}`}>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#gallery" className="nav__link">
            Gallery
          </a>
        </li>
        <li className="nav__item last__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={`nav__toggler ${isNavExpanded ? "toggle" : ""}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Header;
