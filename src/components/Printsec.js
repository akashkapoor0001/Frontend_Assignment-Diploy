import React from 'react'
import image4 from "../components/images/printify1.png"
import image5 from "../components/images/printify2.png"
import image6 from "../components/images/printify3.png"
const Printsec = () => {
    return (
        <div>
            <section className='print-sec'>
                <div className='part1'>
                    <img className='print-img' src={image4} alt='' style={{ height: "160px", display: "flex", justifyContent: "start" }} />
                    <h3 className='print-head' style={{ color: "#29ab51", textAlign: "start", paddingTop: "35px" }}>CREATE</h3>
                    <h1 className='print-h1' style={{ textAlign: "start", paddingTop: "5px" }}>custom products</h1>
                    <p className='print-p' style={{ width: "350px", textAlign: "start", paddingTop: "20px", color: "#485256", lineHeight: "20px", fontSize: "14px" }}>Easily add your designs to a wide range of products using our free tools</p>
                </div>
                <div className='part1'>
                    <img className='print-img' src={image5} alt='' style={{ height: "160px", display: "flex", justifyContent: "start" }} />
                    <h3 className='print-head' style={{ color: "#29ab51", textAlign: "start", paddingTop: "35px" }}>SELL</h3>
                    <h1 className='print-h1' style={{ textAlign: "start", paddingTop: "5px" }}>on your terms</h1>
                    <p className='print-p' style={{ width: "330px", textAlign: "start", paddingTop: "20px", color: "#485256", lineHeight: "20px", fontSize: "14px" }}>you choose the products, sale price, and where to sell </p>
                </div>
                <div className='part1'>
                    <img className='print-img' src={image6} alt='' style={{ height: "160px", display: "flex", justifyContent: "start" }} />
                    <h3 className='print-head' style={{ color: "#29ab51", textAlign: "start", paddingTop: "35px" }}>WE HANDLE</h3>
                    <h1 className='print-h1' style={{ textAlign: "start", paddingTop: "5px" }}>fulfillment</h1>
                    <p className='print-p' style={{ width: "320px", textAlign: "start", paddingTop: "20px", color: "#485256", lineHeight: "20px", fontSize: "14px" }}>once an order is placed, we automatically handle all the printing and delivery logistics</p>
                </div>
            </section>
        </div>
    )
}

export default Printsec
