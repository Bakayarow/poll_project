import React, { useState, useEffect } from 'react';
import './style.css';
import Nav from '../../../Components/Nav/Nav';

function SessionsTerminees() {
  const [sessionsEnd, setsessionsEnd ] = useState([])

  const getsessionsEnd = async () =>{
    try {    
        const res = await fetch("http://localhost:1337/api/sessions/end");
        const data = await res.json()
    
        setsessionsEnd(data)
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() =>{
    getsessionsEnd()
  },[])







  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS TERMINEES</h2>
            <ul>
                {
                sessionsEnd.map(session  => <li className='session--liste'>{session.name}</li>)
               }
               
            </ul>
        </div>
    </section>
  );
}

export default SessionsTerminees;