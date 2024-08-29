// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/styles.css";
import "../styles/header.css";
import kintsugi from '/kintsugi.png';
import { useUser } from '../contexts/UserContext'; // Import the context hook

const Header = () => {
  const location = useLocation();
  const { isAdmin } = useUser(); // Access the user context

  return (
    <nav id="mainNav">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className={`logo ${location.pathname === '/' ? 'active' : ''}`}>
            <img src={kintsugi} alt="Kintsugi Logo" width="150" height="150" />
            Kintsugi
          </Link>
          <div className="nav-menu">
            <ul>
              <li>
                <Link 
                  to="/home" 
                  className={location.pathname === '/home' ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/statistics" 
                  className={location.pathname === '/statistics' ? 'active' : ''}
                >
                  Statistics
                </Link>
              </li>
              {!isAdmin && location.pathname !== '/home' && (
                <li>
                  <Link 
                    to="/login" 
                    className={location.pathname === '/login' ? 'active' : ''}
                  >
                    Admin Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
