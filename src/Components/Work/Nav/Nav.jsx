import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./Nav.css"
import { useState } from 'react'

const Nav = () => {

  const [active, setActive] = useState("/")

  return (
    <>
        <div className='container-fluid nav__container '>
          <div className='nav__links'>
              <Link to="/" className={active === "/" ? "link active" : "link"} onClick={() => {setActive("/")}}>Works</Link>
              <Link to="/Blog" className={active === "/Blog" ? "link active" : "link"} onClick={() => {setActive("/Blog")}}>Blog</Link>
          </div>
        </div>
        
        <div>
            <Outlet />
        </div>
    </>
  )
}

export default Nav
