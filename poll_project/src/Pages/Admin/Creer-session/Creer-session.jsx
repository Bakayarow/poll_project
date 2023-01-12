import './style.css';
import Nav from '../../../Components/Nav/Nav';
import React, { useState } from 'react';
import axios from 'axios';

function CreerSession() {

  const [sessionData, setSessionData] = useState({
    sessionName : null,
    dateStart : null,
    pin : generatePin(),
    status : "coming"
  })

  const handleInputChange = (event) =>{
    setSessionData({
      ...sessionData, 
      [event.target.name] : event.target.value
    })
  }

  function generatePin() {
    return Math.floor(Math.random()*90000)
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const formatData = data : sessionData;
    
    axios.post('http://localhost:3000/api/sessions', sessionData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
              name='sessionName'
              onChange={handleInputChange}
              />
          </label>
          <br />
          <label className='form--label'>
              DATE DE LA SESSION
              <input
              type="datetime-local"
              id="dateStart"
              name="dateStart"
              min="2023-01-01T00:00" 
              max="2200-06-14T00:00"
              onChange={handleInputChange}
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