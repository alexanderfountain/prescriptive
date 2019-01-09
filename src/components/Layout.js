import React from 'react'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions';
import Navbar from '../components/Navbar'
import Topsocial from '../components/Topsocial'
import Footer from '../components/Footer'
import './all.sass'
import '../css/main.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Prescriptive" />
    <header id="header" className="header">

    <Topsocial />
    <Navbar />
    </header>
    <PageTransition>
    <div>{children}</div>
    </PageTransition>
    <Footer />
  </div>
)

export default TemplateWrapper
