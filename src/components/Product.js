import React from 'react';
import image3 from "../components/images/print.png";

const Product = () => {
    return (
        <div>
            <section className='container-1'>
                <div className='image-left'>
                    <img src={image3} alt='image2' style={{ height: "600px" }} />
                </div>
                <div className='content-right'>
                    <h1 className='cont-head' style={{ fontSize: "30px", width: "540px", textAlign: "start", paddingLeft: "100px", lineHeight: "40px", marginBottom: "0px" }}>
                        Easily add your design to a wide range of products
                    </h1>
                    <p className='cont-para' style={{ width: "540px", textAlign: "start", paddingLeft: "100px", paddingTop: "10px", lineHeight: "25px", color: "gray" }}>
                        With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
                    </p>
                    <button className= 'all-products' style={{ 
                        fontWeight: "bold", 
                        fontSize: "16px", 
                        color: "#46BC68", 
                        backgroundColor: "transparent", 
                        border: "none", 
                        cursor: "pointer", 
                        paddingLeft: "100px", 
                        paddingTop: "20px", 
                        textDecoration: "none" 
                    }}>
                        All Products →
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Product;
