import React, { useState,useRef } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiXMark} from 'react-icons/hi2'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Nav = (props) => {

  const navigate = useNavigate()

  const slide  = useRef(null);

  const openmenu = () =>
{
   slide.current.style.right= "0";
   console.log(state);
} 

const closemenu = () =>
{
    slide.current.style.right = "-300px" ;
}

const [state,setState]=useState(true);


  return (
  <div className="homecontainer" style={{ backgroundColor: "#eb596e" }}>
    <nav>
      <ul id="slidemenu" ref={slide}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <a onClick={()=>{localStorage.clear(); navigate('/signin')}}>Logout</a>
        </li>
       <HiXMark style={{ color: "#000" }} id="menu" onClick={closemenu}/>
      </ul>
      <GiHamburgerMenu style={{ color: "#000" }} id="menu" onClick={openmenu}/>
    </nav>
    {props.children}
    <Outlet/>
  </div>
  )
}

export default Nav
