import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="homeHeader">
      <ul className="homeHeader_title">
        <li>Lulyra Meets</li>
      </ul>
      <ul className="homeHeader_options">
        <li>Login</li>
        <li>Register</li>
      </ul>
    </header>
  );
}

export default Header;
