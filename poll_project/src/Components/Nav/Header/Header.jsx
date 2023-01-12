import React from 'react';
import './style.css';
import logo from '../../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Header() {
  
  return (
    <section>
        <div>
            <img src={logo} alt=""/>     
        </div>
        <div>
            <i><FontAwesomeIcon icon={faCoffee} /></i>
            <i></i>
        </div>
    </section>


  );
}

export default Header;
