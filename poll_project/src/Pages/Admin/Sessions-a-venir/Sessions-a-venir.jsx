import React, { useState, useEffect } from 'react';
import './style.css';
import Nav from '../../../Components/Nav/Nav';

function SessionsAVenir() {
  const [sessionsComing, setSessionsComing ] = useState([])

  const getsessionsComing = async () =>{
    try {    
        const res = await fetch("http://localhost:1337/api/sessions/coming");
        const data = await res.json()
    
        setSessionsComing(data)
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() =>{
    getsessionsComing ()
  },[])






  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS A VENIR</h2>
          <ul>
                {
                sessionsComing.map(session  => <li className='session--liste' key={session.id}>{session.name}</li>)
               }
               
            </ul>
        </div>
    </section>
  );
}

export default SessionsAVenir;