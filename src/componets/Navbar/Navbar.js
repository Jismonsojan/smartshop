import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <header>

    <div className='nav-head'>

      <div className='sitelogo'>
      <Link to="/"><img src="/Images/smartshop.svg" alt="website logo"/></Link>
      </div>

      <div className='nav-items'>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div className='signin-user'>
      <Link to="/login">Login</Link>
      <img src="/Images/user.png" alt="user"/>
      </div>
    </div>
    
    
   </header>
  )
}
