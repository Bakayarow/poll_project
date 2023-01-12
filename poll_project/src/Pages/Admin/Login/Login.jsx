import logo from '../../../assets/img/logo.png';
import './style.css';
import React, { useState } from 'react';
import AuthAPI from './AuthAPI';

function Login() {
  const [creadentials, setCredentials] = useState({
    username:'',
    password:''
  });


  const handleChange = ({currentTarget}) => {
    const {value, name} = currentTarget
    setCredentials({
      ...creadentials,
      [name] : value
    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: "test@gmail.com",
        password: "0000000"
    })
  };

    const res = await fetch('http://localhost:8082/api/auth/local4',requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.error))

  }

  return (
    <section>
        <div className="header-logo-container">
            <img src={logo} alt=""/>
        </div>
        <div className="bloc--bg-gradient">
          <form onSubmit={handleSubmit}>
          <label className='form--label'>
              USERNAME
              <input
              id='username'
              type="text"
              name='username'
              onChange={handleChange}
              />
          </label>
          <br />
          <label className='form--label'>
              PASSWORD
              <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              />
          </label>
          <br />
          <button className="btn--custom" type="submit">Log In</button>
          </form>
        </div>

    </section>
  );
}

export default Login;