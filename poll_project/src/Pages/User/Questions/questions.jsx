import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom"
import './style.css';


function Example({socket}) {


  const [adminquestion, setAdminquestion] = useState([]);

 
  

  useEffect(() => {
    socket.on('adminQuestions', (data) => setAdminquestion(data));
  }, [socket, adminquestion]);



   const handleVote = async (vote) =>{


      const userEmail = localStorage.getItem('userEmail')
      const res = await fetch("http://localhost:1337/api/participants");
      const data = await res.json()

      const user = data.data.find(user => user.attributes.email === userEmail)
 
      console.log(vote)
     if(user === undefined){
      console.log("user not found")
     }else{

      const formatData = {
        "data": {
            "choice":vote,
            "participantId":user.id,
            "itemId":adminquestion.id
          }
        }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formatData)
    };

    const res = await fetch("http://localhost:1337/api/votes",requestOptions);
    console.log(res.status)
    console.log(formatData)


     }
     
  
  }


    return (
      <div>
        <div className='banner-top'>
          <p>Session NAME</p>
        </div>
        <div className='banner-question'>
          <p key={adminquestion.id}> {adminquestion.length > 0 ? "Bientot les questions" : adminquestion.name } </p>
        </div>


        <div className='questions'>
       

          <input 
            className="checkbox-tools" value="green-dark" type="radio" name="tools" id="tool-1" 
            onClick={(e) => handleVote(e.target.value)}
          
          />
          <label className="for-checkbox-tools" for="tool-1">
          <div className="colors color-green-full"></div>
            Tout à fait d'accord !
          </label>

          <input 
             className="checkbox-tools" value="green-ligth" type="radio" name="tools" id="tool-2" 
             onClick={(e) => handleVote(e.target.value)}
      
             />
          <label className="for-checkbox-tools" for="tool-2">
            <div className="colors color-green-demi"></div>
            D'accord.
          </label>

          <input 
            className="checkbox-tools" value="orange" type="radio" name="tools" id="tool-3" 
            onClick={(e) => handleVote(e.target.value)}
            />
          <label className="for-checkbox-tools" for="tool-3">
          <div className="colors color-orange"></div>
            Mitigé..
          </label>

          <input 
            className="checkbox-tools" value="red-ligth" type="radio" name="tools" id="tool-4" 
            onClick={(e) => handleVote(e.target.value)}
          />
          <label className="for-checkbox-tools" for="tool-4">
          <div className="colors color-red-demi"></div>
            Pas tout à fait d'accord...
          </label>

          <input 
            className="checkbox-tools" value="red-dark" type="radio" name="tools" id="tool-5" 
            onClick={(e) => handleVote(e.target.value)}
          />
          <label className="for-checkbox-tools" for="tool-5">
          <div className="colors color-red-full"></div>
            Pas d'accord !
          </label>

          <input 
            className="checkbox-tools" value="white" type="radio" name="tools" id="tool-6" 
            onClick={(e) => handleVote(e.target.value)}
            />
          <label className="for-checkbox-tools" for="tool-6">
          <div className="colors color-white"></div>
            Ne sais pas...
          </label>
          
          <input 
            className="checkbox-tools" value="black" type="radio" name="tools" id="tool-7" 
            onClick={(e) => handleVote(e.target.value)}
          />
          <label className="for-checkbox-tools" for="tool-7">
          <div className="colors color-black"></div>
            Ne souhaite pas répondre
          </label>
        </div>
      </div>
    );
}
export default Example
