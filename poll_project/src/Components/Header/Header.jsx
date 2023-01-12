import React from 'react';
import './style.css';
import logo from '../../assets/img/logo.png';


function Header() {
  
  return (
    <div className="header-logo-container">
            <img src={logo} alt=""/>
        </div>

  );
}

export default Header;
