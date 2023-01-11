import logo from '../../../assets/img/logo.png';
import './style.css';
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Username: ', username);
    console.log('Password: ', password);
    // Perform API call or other logic here
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
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
              />
          </label>
          <br />
          <label className='form--label'>
              PASSWORD
              <input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
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