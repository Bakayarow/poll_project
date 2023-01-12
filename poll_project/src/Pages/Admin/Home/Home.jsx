import logo from '../../../assets/img/logo.png';
import './style.css';

function Home() {

  return (
    <section>
        <div className="header-logo-container">
            <img src={logo} alt=""/>
        </div>
        <div className='bloc--bg-gradient'>
          <div className="bloc--content">
          <h1>VOS SESSIONS</h1>
            <hr class="title_line"/>
            <button type="button" className="btn--custom">SESSIONS TERMINEES</button>
            <button type="button" className="btn--custom">SESSIONS A VENIR</button>
            <button type="button" className="btn--custom">CREER UNE SESSION</button>
          </div>
        </div>
    </section>
  );
}

export default Home;