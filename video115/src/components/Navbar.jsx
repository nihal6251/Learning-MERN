import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink style={(e)=>{return e.isActive?{color:"red"} : {}}} to="/"><li>Home</li></NavLink>
            <NavLink style={(e)=>{return e.isActive?{color:"red"} : {}}} to="/login"><li>Login</li></NavLink>
            <NavLink style={(e)=>{return e.isActive?{color:"red"} : {}}} to="/about"><li>About</li></NavLink>
        </nav>
    </div>

  )
}

export default Navbar
