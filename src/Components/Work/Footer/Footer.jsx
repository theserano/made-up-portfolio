import React from 'react'
import "./Footer.css"
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className='footer__icons container'>
        <i><FaFacebookSquare /></i>
        <i><FaInstagramSquare /></i>
        <i><FaTwitterSquare /></i>
        <i><FaLinkedin /></i>
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  )
}

export default Footer
