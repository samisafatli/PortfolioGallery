import { useState } from "react";
import "./Header.style.css";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { Link } from "react-router-dom";

export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar">
      <Link className="nav__link" to='/'>
        <TheaterComedyIcon style={{ color: "white", fontSize: "45px" }} />
      </Link>
      <ul className={`nav__menu ${isNavExpanded ? "nav__active" : ""}`}>
        <li className="nav__item">
          <Link onClick={navToggle} className="nav__link" to='/'>Home</Link>
        </li>
        <li className="nav__item">
          <Link onClick={navToggle} className="nav__link" to='/Gallery'>Gallery</Link>
        </li>
        <li className="nav__item last__item">
          <Link onClick={navToggle} className="nav__link" to='/contact'>Contact</Link>
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
