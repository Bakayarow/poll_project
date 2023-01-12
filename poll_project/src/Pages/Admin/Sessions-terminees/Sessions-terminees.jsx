import './style.css';
import Nav from '../../../Components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


function SessionsTerminees() {

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS TERMINEES</h2>
            <ul>
                <li className='session--liste'>Boucle sur les sessions terminées <i><FontAwesomeIcon icon={faChevronRight} /></i></li>
                <li className='session--liste'>Boucle sur les sessions terminées <i><FontAwesomeIcon icon={faChevronRight} /></i></li>
                <li className='session--liste'>Boucle sur les sessions terminées <i><FontAwesomeIcon icon={faChevronRight} /></i></li>
            </ul>
        </div>
    </section>
  );
}

export default SessionsTerminees;