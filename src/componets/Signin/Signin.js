import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className='signin-main'>
      <div className='signin-image'>
        <img src="/Images/login.webp" alt="website logo"/>
      </div>
      <div className='signin-details'>
        <h2>Register Your Account</h2>
        <input type="text" placeholder='First Name' required/>
        <input type="text" placeholder='Last Name'required/>
        <input type="email" placeholder='Email ID'required/>
        <input type="text" placeholder='UserName'required/>
        <input type="password" placeholder='Password'required/>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Signin;

