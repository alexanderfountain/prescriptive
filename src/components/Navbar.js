import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../images/Prescriptive-new-logo-resized.png'
// import SmoothScroll from 'smooth-scroll'

// if (typeof window !== 'undefined') {
//   var scroll = new SmoothScroll('a[href*="#"]', {
//     offset: 150, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
//   });
// }

const Navbar = () => (
<div className="main-nav">
<div className="container">
  <Link to="/" class="navbar-brand">
    <img style={{width: "355px"}} src={logo} alt="prescriptive" />
  </Link>
  <nav className="nav">
    <ul className="navigation-list">
      <li><a href="#header">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact-us" class="btn btn-sm">Contact</a></li>
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
