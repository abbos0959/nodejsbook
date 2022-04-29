import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar_wrap'>
        <div className='Menu'>
        <h1>Abbos</h1>

        <div className='Home'>
            <Link to="/add_post"> <p>Add Post</p></Link>
            
            <p>Home</p>
            <p>Books</p>
            <p>Login</p>

            </div>
        </div>







    </div>
  )
}
