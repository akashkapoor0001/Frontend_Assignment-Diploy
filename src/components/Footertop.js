import React, { useEffect } from 'react';
import AOS from 'aos';
import './style.css';
import image from "../components/images/money.avif"
const Footertop = () => {

  return (
    <div>
      <div className="container">
        <div className="left-box">
          <h1 className='leftbox-h' style={{ fontSize: "40px", width: "400px", textAlign: "start" }}>Make Money, Risk-Free</h1>
          <p className='leftbox-p' style={{ width: "400px", textAlign: "start", paddingTop: "30px" }}>You pay for fulfillment only when you make a sale</p>
          <div className="price-box">
            <p>You sell a t-shirt <span>$30</span></p>
            <p style={{ paddingTop: "20px" }}>You pay for its production <span>$12</span></p>
            <hr />
            <p style={{ paddingTop: "20px" }}>Your profit <span className="profit">$18</span></p>
          </div>
          <button className="sell-btn">Start selling</button>
          <p className="note">100% Free to use · 900+ Products · Largest print network</p>
        </div>
        <div className="right-illustration">
          <img src={image} alt="Illustration" />
        </div>
      </div>
    </div>
  )
}

export default Footertop

