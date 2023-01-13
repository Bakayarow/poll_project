import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';
import './style.css';

function LoginUser({socket}) {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName  : "",
    lastName  : "",
    email : "",
    sessionpin: "",
    role : ""
  })

  const handleInputChange = (event) =>{
    setUserData({
      ...userData, 
      [event.target.name] : event.target.value
    })
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const formatData = {
        "data": 
          {
              "firstname": userData.firstName,
              "lastname": userData.lastName,
              "email": userData.email,
              "role": userData.role,
             "sessionpin" : userData.sessionpin
          }
        }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formatData)
    };

    const res = await fetch("http://localhost:1337/api/participants",requestOptions);
    if(res.status === 200){
      socket.emit('newUser', {username : userData.firstName});
      localStorage.setItem('userEmail', userData.email)
      navigate(`/room/20`)
  
    }


    } catch (error) { console.log(error.message) }
  }



  
  return (
    <div className="App">
      <img className='logo' src={logo} alt="logo" />
      <form className='form-login' onSubmit={handleSubmit}>
        <h2>BIENVENUE !</h2>
        <div className='form-grid'>
            <label className='pin-code'>
                Code pin session
                <input type="number" name="sessionpin" onChange={handleInputChange} />
            </label>
            <label>
                Nom
                <input type="text" name="lastName"  onChange={handleInputChange} />
            </label>
            <label>
                Prénom
                <input type="text" name="firstName" onChange={handleInputChange} />
            </label>
            <label>
                Rôle
                <input type="text" name="role" onChange={handleInputChange} />
            </label>
            <label>
                email
                <input type="email" name="email" onChange={handleInputChange} />
            </label>
            <button className='btn-submit' type='submit'>Joindre la session</button>
        </div>
        </form>
    </div>
  );
}

export default LoginUser;
