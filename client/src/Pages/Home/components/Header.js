import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <Router>
      <header className="homeHeader">
        <ul className="homeHeader_title">
          <li>Lulyra Meets</li>
        </ul>
        <ul className="homeHeader_options">
          <li>Login</li>
          <li><a href="http://localhost:3000/register">Register</a></li>
        </ul>
      </header>
    </Router>

  );
}

export default Header;
