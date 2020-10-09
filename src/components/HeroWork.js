import React from 'react'
import './HeroWork.css'
import {Link} from "react-router-dom"
const HeroWork = () => {
    return (
        <div className="herowork-cont">
            <h1 className="herowork-title">WORK</h1>
            <br/>
            <Link to="/contact"><button className="cta cta-work">Message Me</button></Link>
        </div>
    )
}

export default HeroWork
