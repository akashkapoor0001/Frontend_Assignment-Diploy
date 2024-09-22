import React from 'react'
import image3 from "../components/images/print.png"
const Product = () => {
    return (
        <div>
            <section className='container-1'>
                <div className='image-left'>
                    <img src={image3} alt='image2' style={{ height: "600px" }} />
                </div>
                <div className='content-right'>
                    <h1 className='cont-head' style={{ fontSize: "30px", width: "540px", textAlign: "start", paddingLeft: "100px", lineHeight: "40px" }}>Easily add your design to a wide range of products</h1>
                    <p className='cont-para' style={{ width: "500px", textAlign: "start", paddingLeft: "100px", paddingTop: "40px", lineHeight: "25px", color: "gray" }}>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                    <a href='' style={{ lineHeight: "150px", paddingRight: "280px", color: "#46BC68", textDecoration: "none" }}>All Products →</a>
                </div>


            </section>
        </div>
    )
}

export default Product
