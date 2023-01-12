import './style.css';
import Nav from '../../../Components/Nav/Nav';

function SessionsAVenir() {

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS A VENIR</h2>
            <ul>
                <li className='session--liste'>Boucle sur les sessions à venir</li>
                <li className='session--liste'>Boucle sur les sessions à venir</li>
                <li className='session--liste'>Boucle sur les sessions à venir</li>
            </ul>
        </div>
    </section>
  );
}

export default SessionsAVenir;