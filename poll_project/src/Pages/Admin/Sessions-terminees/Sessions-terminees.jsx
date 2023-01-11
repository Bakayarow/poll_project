import './style.css';
import Nav from '../../../Components/Nav/Nav';

function SessionsTerminees() {

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS TERMINEES</h2>
            <ul>
                <li className='session--liste'>Boucle sur les sessions terminées</li>
                <li className='session--liste'>Boucle sur les sessions terminées</li>
                <li className='session--liste'>Boucle sur les sessions terminées</li>
            </ul>
        </div>
    </section>
  );
}

export default SessionsTerminees;