import React, { useEffect, useRef } from 'react'
import "./style.css"
// import SVGLines from './svg'
import image1 from "../components/images/photo.png"

import image3 from "../components/images/print.png"
import image4 from "../components/images/printify1.png"
import image5 from "../components/images/printify2.png"
import image6 from "../components/images/printify3.png"
import Slick from './slick.js'
import Footertop from './Footertop.js'
import Footer from './Footer.js'
import pic from "../components/images/design.png"
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






