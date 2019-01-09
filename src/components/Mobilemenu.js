import React from 'react'
import logo from '../images/Prescriptive-new-logo-resized.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { elastic as Menu } from 'react-burger-menu'

const Mobilemenu = () => (
  <div className="mobile-container" style={{position: 'relative'}}>
  <a href="#" className="bm-burger-button .hamburger-box">
  </a>
  <Menu right>
        <AnchorLink offset='158' href="#header">Home</AnchorLink>
        <AnchorLink offset='158' href="#services">Services</AnchorLink>
        <AnchorLink offset='158' href="#about">About</AnchorLink>
        <AnchorLink offset='158' href="#contact-us" class="btn btn-sm">Contact</AnchorLink>
  </Menu>
  </div>
)

export default Mobilemenu

