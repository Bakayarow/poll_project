import logo from '../../../assets/img/logo.png';
import './style.css';

function Home() {

  return (
    <section>
        <div className="header-logo-container">
            <img src={logo} alt=""/>
        </div>
        <div>
            <h2>VOS SESSIONS</h2>
            <hr class="title_line"/>
            <button type="button" className="btn btn-lg btn--custom">SESSIONS TERMINEES</button>
            <button type="button" className="btn btn-lg btn--custom">SESSIONS A VENIR</button>
            <button type="button" className="btn btn-lg btn--custom">CREER UNE SESSION</button>
        </div>
    </section>
  );
}

export default Home;