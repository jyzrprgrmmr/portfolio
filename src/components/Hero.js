import React from 'react';
import './Hero.css';
const Hero = () => {
    return (
        <div className="hero-container">
            <h1 className="hero-title">FRONTEND DEVELOPER</h1>
            <p className="hero-subtitle">
                A web developer mainly focused on designing and <br/>coding beautiful websites...
            </p>

            <p className="hero-subtitle">Scroll down to know more about me.</p>
            <div className="scroll-icon">
                <div></div>
            </div>  
        </div>
    )
}

export default Hero
