import './style.css';
import Nav from '../../../Components/Nav/Nav';

function SessionsTerminees() {

  return (
    <section className='container'>
          <Nav/>
        <div>
            <ul>
                <li className='session--liste'>Boucle sur les sessions terminées</li>
                <li className='session--liste'>Boucle sur les sessions terminées</li>
            </ul>
        </div>
    </section>
  );
}

export default SessionsTerminees;