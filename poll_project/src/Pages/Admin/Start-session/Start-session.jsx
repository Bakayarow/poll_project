import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom"



import './style.css';
import Nav from '../../../Components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

function StartSession({socket}) {

  const navigate = useNavigate();
  const {id} = useParams()


  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

 


  const [sessionDetails, setSessionDetails ] = useState([])

  const getSessionInfos = async () =>{
    try {    
        const res = await fetch(`http://localhost:1337/api/sessions/${id}`);
        const data = await res.json()
    
        setSessionDetails(data.data.attributes)
      
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() =>{
    getSessionInfos ()
  },[])



  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container bloc--bg-gradient-rotate bloc--display-block'>
          <div className='return'>
            retour à la liste
            <i> <FontAwesomeIcon icon={faList} /> </i>
          </div>
          <div className="bloc--pin-code">
            <h2>CODE SESSION</h2>
            <p>{sessionDetails.pin}</p>
          </div>
          <div className="bloc--participants">
            <h2>PARTICIPANTS</h2>
            <p>{users.length}/15</p>  
          </div>
          <button 
            className="btn--custom" 
            type="submit"
            onClick={() => navigate(`/questions/session/${id}`)}
          >
            COMMENCER</button>
        </div>
    </section>
  );
}

export default StartSession;