import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/vertical-logo.png'
import cart_icon from '../Assets/Shopping_cart_icon.svg.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

const [menu,setMenu] = useState("home");
const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
             
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cereals")}}><Link style={{ textDecoration: 'none' }} to='/cereals'>Cereals</Link>{menu==="cereals"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("vegetables")}}><Link style={{ textDecoration: 'none' }} to='/vegetables'>Vegetables</Link>{menu==="vegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("legumes")}}><Link style={{ textDecoration: 'none' }} to='/legumes'>Legumes</Link>{menu==="legumes"?<hr/>:<></>}</li>
        </ul>

  <div className="nav-login-cart">
  {localStorage.getItem('auth-token')
  ? (<button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}> Logout </button>) 
  : (<Link to='/login'><button>Login</button></Link> )}
  
   <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
   <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>


    </div>
  )
}

export default Navbar