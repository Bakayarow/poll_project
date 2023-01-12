import logo from '../../../assets/img/logo.png';
import './style.css';
import Header from '../../../Components/Header/Header';
import NavSmall from '../../../Components/Nav/NavSmall';
import Nav from '../../../Components/Nav/Nav';


function Home() {

  return (
    <section>
        <NavSmall />
        <Header />
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