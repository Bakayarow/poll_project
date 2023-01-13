import React, { useState, useEffect } from 'react';
import './style.css';


function Example({socket}) {

  const [adminquestion, setAdminquestion] = useState([]);
  

  useEffect(() => {
    socket.on('adminQuestions', (data) => setAdminquestion(data));
  }, [socket, adminquestion]);



    return (
      <div>
        <div className='banner-top'>
          <p>Session NAME</p>
        </div>
        <div className='banner-question'>
          <p key={adminquestion.id}> {adminquestion.length > 0 ? "Bientot les questions" : adminquestion.name } </p>
        </div>


        <div className='questions'>

          <input className="checkbox-tools" value="1" type="radio" name="tools" id="tool-1" />
          <label className="for-checkbox-tools" for="tool-1">
          <div className="colors color-green-full"></div>
            Tout à fait d'accord !
          </label>

          <input className="checkbox-tools" value="2" type="radio" name="tools" id="tool-2" />
          <label className="for-checkbox-tools" for="tool-2">
            <div className="colors color-green-demi"></div>
            D'accord.
          </label>

          <input className="checkbox-tools" value="3" type="radio" name="tools" id="tool-3" />
          <label className="for-checkbox-tools" for="tool-3">
          <div className="colors color-orange"></div>
            Mitigé..
          </label>

          <input className="checkbox-tools" value="4" type="radio" name="tools" id="tool-4" />
          <label className="for-checkbox-tools" for="tool-4">
          <div className="colors color-red-demi"></div>
            Pas tout à fait d'accord...
          </label>

          <input className="checkbox-tools" value="5" type="radio" name="tools" id="tool-5" />
          <label className="for-checkbox-tools" for="tool-5">
          <div className="colors color-red-full"></div>
            Pas d'accord !
          </label>

          <input className="checkbox-tools" value="6" type="radio" name="tools" id="tool-6" />
          <label className="for-checkbox-tools" for="tool-6">
          <div className="colors color-white"></div>
            Ne sais pas...
          </label>
          
          <input className="checkbox-tools" value="7" type="radio" name="tools" id="tool-7" />
          <label className="for-checkbox-tools" for="tool-7">
          <div className="colors color-black"></div>
            Ne souhaite pas répondre
          </label>
        </div>
      </div>
    );
}
export default Example
