import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Topsocial from '../components/Topsocial'
import Footer from '../components/Footer'
import './all.sass'
import '../css/main.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Prescriptive" />
    <Topsocial />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
