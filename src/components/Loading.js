// src/components/Loading.js

import React from 'react';
import './Loading.css'; // You'll need this for styles
import image from './images/printify.png';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <img src={image} alt="Printify Logo" className="loading-logo" />
                <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
