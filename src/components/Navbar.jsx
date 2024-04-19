//Navbar.jsx

import React from 'react'
import './navbar.css'
import logo from '../assets/image.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="USA-Flag" className='logo' />
    </nav>
  )
}

export default Navbar