import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import Nav from '../../../Components/Nav/Nav';

function SessionsAVenir() {
  const navigate = useNavigate();
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
          
            { sessionsComing.map(session  =>(
                <div className='item-section' key={session.id}>
                  <li className="session--liste">{session.name}</li>
                  <button 
                    className='item-detail-btn'
                    onClick={() => navigate(`/session/detail/${session.id}`)}
                    >Voir</button>
                </div>
            ) ) }
        
        </div>
    </section>
  );
}

export default SessionsAVenir;