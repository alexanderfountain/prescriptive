import React from 'react'
import Helmet from 'react-helmet'
import posed from 'react-pose'
import Navbar from '../components/Navbar'
import Innermenu from '../components/Innermenu'
import Topsocial from '../components/Topsocial'
import Footer from '../components/Footer'
import './all.sass'
import '../css/main.css'

const Child = posed.p({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Prescriptive" />
    <header id="header" className="header">

    <Topsocial />
    <Navbar />
    <Innermenu />
    </header>
    <Child>{children}</Child>
    <Footer />
  </div>
)

export default TemplateWrapper
