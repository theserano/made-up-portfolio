import React from 'react'
import ME from "../../../assets/Ellipse1.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='Introduction container'>

      <div className='Header__introduction'>
        <h2>Hi, I am John, <br/> Creative Technologists</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti aspernatur ad blanditiis quod necessitatibus consectetur fugiat. Soluta distinctio ipsa placeat</p>
        <div className='btn btn-danger '>Download Resume</div>
      </div>

      <div className='Header__image'>
        <img src={ME} alt="me" />
      </div>

    </div>
  )
}

export default Header
