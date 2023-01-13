import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom"

import './style.css';
import Nav from '../../../Components/Nav/Nav';


function StartSession({socket}) {

  const navigate = useNavigate();
  const {id} = useParams()
  const [itemsSession, setItemsSession ] = useState([])

  const getItemsBySession = async () =>{
    try {    
        const res = await fetch(`http://localhost:1337/api/items/section/${id}`);
        const data = await res.json()
    
        setItemsSession(data)
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() =>{
    getItemsBySession ()
  },[])


  const [selected, setSelected] = useState(0);
  const handleAssigneeNextOnClick = (e) => {
      setSelected((prev) => {
      if (prev === itemsSession.length - 1) {
          return 0;
      } else {
          return (prev + 1) % itemsSession.length;
      }
      });
      e.preventDefault();
  };
  const handleAssigneePreviousOnClick = () => {
      setSelected((prev) => {
      if (prev === 0) {
          return 0;
      } else {
          return prev - 1;
      }
      });
  };

  socket.emit('questions', itemsSession[selected]);

  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container-2 bloc--bg-gradient-rotate bloc--display-block'>
            <div className="bloc--question-name">
              <h2 className="">{itemsSession.length > 0 ? itemsSession[selected].name : null}</h2>
            </div>
          <div className="bloc--participants">
            <h2>PARTICIPANTS</h2>
            <p>12/15</p>  
          </div>
         {
          selected + 1 === itemsSession.length ? 
          <button 
          className="btn--custom" 
           type="submit"
           onClick={() => navigate(`/session/session/${id}`)}
        >
         Terminer la Section
       </button>
          
          : 
          <button 
           className="btn--custom" 
            type="submit"
            onClick={handleAssigneeNextOnClick }
         >
          SUIVANT
        </button>
         }
         
        </div>
    </section>
  );
}

export default StartSession;