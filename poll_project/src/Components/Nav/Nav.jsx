import React from 'react';
import './style.css';
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  
  return (
    <section className='navcontainer'>
        <div className='navleft'>
            <img className='logonav' src={logo} alt=""/>     
        </div>
        <div className='navright'>
            <div className='firsticon'>
              <a href="/">
                <i><FontAwesomeIcon icon={faHome} /></i>
              </a>
            </div>
            <div className='secondicon'>
            <a href="/login">
              <i><FontAwesomeIcon icon={faSignOutAlt} /></i>
            </a>
            </div>
        </div>
    </section>

  );
}

export default Nav;
