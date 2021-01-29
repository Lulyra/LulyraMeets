import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <Router>
      <header className="homeHeader">
        <ul className="homeHeader_title">
          <li><a href="http://localhost:3000/">Lulyra Meets</a></li>
        </ul>
        <ul className="homeHeader_options">
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit"><a href="http://localhost:3000/login">Login</a></button>
          <button type="button"><a href="http://localhost:3000/register">Register</a></button>
        </ul>
      </header>
    </Router>

  );
}

export default Header;
