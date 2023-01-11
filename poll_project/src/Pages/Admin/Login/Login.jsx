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
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            />
        </label>
        <br />
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            />
        </label>
        <br />
        <button type="submit">Log In</button>
        </form>
    </section>
  );
}

export default Login;