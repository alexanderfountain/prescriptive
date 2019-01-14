import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

const InnerMobilemenu = () => (
  <div className="mobile-container" style={{position: 'relative'}}>
  <a href="#" className="bm-burger-button .hamburger-box">
  </a>
  <Menu right>
        <Link to="/#header">Home</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact-us" class="btn btn-sm">Contact</Link>
  </Menu>
  </div>
)

export default InnerMobilemenu
