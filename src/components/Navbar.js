import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../images/Prescriptive-new-logo-resized.png'

const Navbar = () => (
<div className="main-nav">
<div className="container">
  <Link to="#" class="navbar-brand">
    <figure>
    <img style={{width: "355px"}} src={logo} alt="prescriptive" />
    </figure>
  </Link>
  <nav className="nav">
    <ul className="navigation-list">
      <li><Link to="#wrapper">Home</Link></li>
      <li><Link to="#services">Services</Link></li>
      <li><Link to="#about">About</Link></li>
      <li><Link to="#contact-us" class="btn btn-sm">Contact</Link></li>
    </ul>
  </nav>

  <Link to="#" className="hamburger hamburger--collapse hamburger--squeeze">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </Link>

</div>
</div>
)

export default Navbar
