import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
 import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

 import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
  const items = useSelector((state)=>state.cart)

  return (
    <div >
      <nav className='navbar'>
       <Link to='/' className='link'>  <h1 className="logo">My Store</h1>  </Link>
      <ul className='nav-links'>
        <Link  className='link'  to='/'>Home</Link>
        <Link  className='link' to='cart'> <BsFillCartFill/> - {items.length}</Link>
        <Link className='link' to=''> Cart-items - <span className='items-length'>{items.length}</span> </Link>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
