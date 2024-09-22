import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import image1 from "../components/images/photo.png";
import play from "../components/images/play.png";
import Navbar from './Navbar'; // Assuming you have a Navbar component

const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a short loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Loading time set to 1 second
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Only render the Navbar when loading is complete */}
            {!isLoading && <Navbar />}

            {/* Render the loading screen while isLoading is true */}
            {isLoading ? (
                <Loading />
            ) : (
                <section className="hero-section">
                    <div className="content-container">
                        <div className="text-content">
                            <h1>Create and sell custom products</h1>
                            <ul>
                                <li>100% Free to use</li>
                                <li>900+ High-Quality Products</li>
                                <li>Largest global print network</li>
                            </ul>
                            <div className="cta-buttons">
                                <button className="start-btn">Start for free</button>
                                <button className="how-btn">
                                    <img className="play-image" src={play} alt="Business Solutions" />
                                    <span>How it works?</span>
                                </button>
                            </div>
                            <p className="trusted">Trusted by over 8M sellers around the world</p>
                        </div>
                        <div>
                            <img className="hero-image" src={image1} alt="Business Solutions" />
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default About;
