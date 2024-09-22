import React from 'react'
import image2 from "../components/images/logo.svg"
const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="logo">
                    <img src={image2} alt='logo' />
                </div>
                <ul class="nav-links">
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Use-cases</a></li>
                    <li><a href="#">Need help?</a></li>
                </ul>
                <div class="auth-buttons">
                    <a href="#" class="login-btn">Log in</a>
                    <a href="#" class="signup-btn">Sign up</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
