import React from 'react'
import "./style.css"
// import SVGLines from './svg'

import Slick from './slick.js'
import Footertop from './Footertop.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import About from './About.js'
import Herosec from './Herosec.js'
import Product from './Product.js'
import Printsec from './Printsec.js'
import Designlines from './Designlines.js'
import Talktosales from './Talktosales.js'
import Testimonials from './Testimonials.js'
const Maincontainer = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <About />
      <Herosec />
      <Product />
      <Printsec />
      <Designlines />
      <Talktosales />
      <Testimonials />
      <Slick />
      <Footertop />
      <Footer />
    </div>
  )
}

export default Maincontainer;






