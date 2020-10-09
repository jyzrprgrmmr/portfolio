import React from 'react'
import './HeroAbout.css'
import {Link} from "react-router-dom"
const HeroAbout = () => {
    return (
        <div className="hero-cont">
            <div className="avatar-container">
                <img src={require('../assets/images/avatar.png')} className="avatar1" alt=""/>
            </div>
            
            <div className="quote">
                <h1 className="heading">"You won't hit the target unless you aim and release an arrow..."</h1>
                <p className="author">~jyzrgnd</p>
                <Link to="/contact"><button className="cta">Message Me</button></Link>
            </div>
        </div>
    )
}

export default HeroAbout
