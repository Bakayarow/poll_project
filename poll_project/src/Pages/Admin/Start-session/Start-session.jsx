import './style.css';
import Nav from '../../../Components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

function StartSession() {

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container bloc--bg-gradient-rotate bloc--display-block'>
          <div className='return'>
            retour à la liste
            <i> <FontAwesomeIcon icon={faList} /> </i>
          </div>
          <div className="bloc--pin-code">
            <h2>CODE SESSION</h2>
            <p>63782</p>
          </div>
          <div className="bloc--participants">
            <h2>PARTICIPANTS</h2>
            <p>12/15</p>  
          </div>
          <button className="btn--custom" type="submit">COMMENCER</button>
        </div>
    </section>
  );
}

export default StartSession;