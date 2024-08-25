// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.css"
// import logo from './logo.png';

const Header = () => {
  return (
    <nav id="mainNav">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="logo">
            {/* <img src={logo} alt="Kintsugi Logo" width="40" height="40" /> */}
            Kintsugi
          </Link>
          <div className="nav-menu">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/report">Report</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><Link to="/login">Admin Login</Link></li> {/* for admin login */}
              {/* <li><a href="#about">About</a></li> */}
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
