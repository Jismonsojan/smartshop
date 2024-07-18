import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login-main'>
      <div className='login-details'>
        <h2>Login</h2>
        <img src="/Images/login.webp" alt="login logo"/>
        <input type="text" placeholder='UserName'/>
        <input type="password" placeholder='Password'/>
        <button>Login</button>
        <Link to="/signin">Create new Account?</Link>
      </div>
    </div>
  );
}

export default Login;
