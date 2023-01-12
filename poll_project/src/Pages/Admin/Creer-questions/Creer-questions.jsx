import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import './style.css';



import Nav from '../../../Components/Nav/Nav';
import Todo from '../../../Components/Todo/Todolist';



function CreerQuestions() {
  
  const {id} = useParams()
  
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
    <section>
        <Nav />
        <div className='headersmall'>
            <div className='headertitle'>
            <h3>{sessionDetails.name}</h3>
            <h3>Prévu pour le : {sessionDetails.datestart}</h3>

  
             
            </div>
        </div>
        <div className='bloc--bg-gradient'>
          <div className='blocmid'>
            <div className='topmid'>
            <h2>Questions de la session</h2>
            <button type='submit'>Démarrer la session</button>
            </div>
            <Todo />
          </div>
          </div>
    </section>
  );
}





export default CreerQuestions;