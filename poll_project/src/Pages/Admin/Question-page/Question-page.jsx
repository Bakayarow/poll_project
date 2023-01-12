import './style.css';
import Nav from '../../../Components/Nav/Nav';

function StartSession() {

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container-2 bloc--bg-gradient-rotate bloc--display-block'>
            <div className="bloc--question-name">
              <h2 className="">QUESTIONS</h2>
            </div>
          <div className="bloc--participants">
            <h2>PARTICIPANTS</h2>
            <p>12/15</p>  
          </div>
          <button className="btn--custom" type="submit">SUIVANT</button>
        </div>
    </section>
  );
}

export default StartSession;