import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function NavSmall() {
  
  return (
    <section className='navcontainer'>
      <div className='navSmallleft'>    
        </div>
        <div className='navright'>
            <div className='firsticon'>
              <a href="">
                <i><FontAwesomeIcon icon={faHome} /></i>
              </a>
            </div>
            <div className='secondicon'>
            <a href="">
              <i><FontAwesomeIcon icon={faSignOutAlt} /></i>
            </a>
            </div>
        </div>
    </section>

  );
}

export default NavSmall;
