import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Topsocial = () => (
  <div class="global-nav">
<div class="container">
  <div class="navigation-top">
    
    <ul class="social">
      <li>
        <Link to="https://twitter.com/PDS_Technology" target="blank"><span class="icon-twitter"></span></Link>
      </li>
    </ul>
    <ul class="global-list">
      <li><Link to="#">Blog</Link></li>
      <li><Link to="#">Careers</Link></li>
    </ul> 
  </div>
</div>
</div>
)

export default Topsocial
