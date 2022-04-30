import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = ({name,setname}) => {
    
  return (
    <div className='navbar_wrap'>
        <div className='Menu'>
        <h1> <a href='/'> Abbos</a> </h1>
        <input placeholder='Search...' className='in' value={name} onChange={(e)=>setname(e.target.value)}/>

        <div className='Home'>
            <Link to="/add_post"> <p>Add Post</p></Link>
            
            <p>Home</p>
            <p>Books</p>
            <Link to="/login">
            <p>Login</p>
            </Link>

            </div>
        </div>







    </div>
  )
}
