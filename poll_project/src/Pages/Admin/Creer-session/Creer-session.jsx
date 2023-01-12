import './style.css';
import Nav from '../../../Components/Nav/Nav';
import React, { useState } from 'react';

function CreerSession() {

  const [sessionName, setSessionName] = useState('');
  const [sessionDate, setSessionDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Nom de la session: ', sessionName);
    console.log('Date de la session: ', sessionDate);
    // Perform API call or other logic here
  }

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container bloc--bg-lightGreen'>
          <h2 className="bloc--title">CREER UNE SESSION</h2>
          <form onSubmit={handleSubmit}>
          <label className='form--label'>
              NOM DE LA SESSION
              <input
              type="text"
              value={sessionName}
              onChange={event => setSessionName(event.target.value)}
              />
          </label>
          <br />
          <label className='form--label'>
              DATE DE LA SESSION
              <input
              type="date"
              value={sessionDate}
              onChange={event => setSessionDate(event.target.value)}
              />
          </label>
          <br />
          <button className="btn--custom" type="submit">CREER</button>
          </form>
        </div>
    </section>
  );
}

export default CreerSession;