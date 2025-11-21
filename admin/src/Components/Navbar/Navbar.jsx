import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/vertical-logo.png'
import navProfile from '../../assets/adm.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" />

    </div>
  )
}

export default Navbar