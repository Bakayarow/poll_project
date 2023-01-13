import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NavSmall() {
  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <section className='navcontainer'>
      <div className='navSmallleft'>  
        <div className='firsticon backicon'>
          <a onClick={handleBackButtonClick}>
            <i><FontAwesomeIcon icon={faArrowLeft} /></i>
          </a>
        </div>
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

export default NavSmall;
