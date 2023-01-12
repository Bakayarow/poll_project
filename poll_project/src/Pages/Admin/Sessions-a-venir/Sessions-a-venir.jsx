import './style.css';
import Nav from '../../../Components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faPen } from '@fortawesome/free-solid-svg-icons'

function SessionsAVenir() {

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS A VENIR</h2>
            <ul>
                <li className='session--liste'>
                  Boucle sur les sessions à venir
                  <div className="icon--couple">
                  <i><FontAwesomeIcon icon={faPen} /></i>
                  <i><FontAwesomeIcon icon={faCirclePlay} /></i>
                  </div>
                </li>
                <li className='session--liste'>
                  Boucle sur les sessions à venir
                  <div className="icon--couple">
                  <i><FontAwesomeIcon icon={faPen} /></i>
                  <i><FontAwesomeIcon icon={faCirclePlay} /></i>
                  </div>
                </li>
                <li className='session--liste'>
                  Boucle sur les sessions à venir
                  <div className="icon--couple">
                  <i><FontAwesomeIcon icon={faPen} /></i>
                  <i><FontAwesomeIcon icon={faCirclePlay} /></i>
                  </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default SessionsAVenir;