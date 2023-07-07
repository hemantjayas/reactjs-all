import React from 'react'
import './navbar.css';

import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li id='logo' onClick={() => { navigate("/") }} >Navbar</li>
      </ul>
      <ul className='navContent'>
        <li onClick={() => { navigate("/home") }}>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>

  )
}
