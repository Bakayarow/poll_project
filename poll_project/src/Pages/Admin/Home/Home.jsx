import logo from '../../../assets/img/logo.png';
import './style.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <section>
        <div className="header-logo-container">
            <img src={logo} alt=""/>
        </div>
        <div className='bloc--bg-gradient'>
          <div className="bloc--content">
            <h1>VOS SESSIONS</h1>
            <hr className="title_line"/>
            <Link to={'/passed-sessions'}>
              <button type="button" className="btn--custom">SESSIONS TERMINEES</button>
            </Link>
            <Link to={'/coming-sessions'}>
              <button type="button" className="btn--custom">SESSIONS A VENIR</button>
            </Link>
            <Link to={'/new-session'}>
              <button type="button" className="btn--custom">CREER UNE SESSION</button>
            </Link>            
          </div>
        </div>
    </section>
  );
}

export default Home;