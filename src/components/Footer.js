import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <ul>
                <li className="social">
                    Hit me on: 
                </li>

                <li className="social">
                    <a href="https://www.facebook.com/jyzrgrfx" target="_blank" rel="noopener noreferrer"><img src={require('../assets/images/facebook.png')} alt="social"/></a>
                </li>
                <li className="social">
                    <a href="https://www.instagram.com/jyzrgandia" target="_blank" rel="noopener noreferrer"><img src={require('../assets/images/instagram.png')} alt="social"/></a>
                </li>
                <li className="social">
                    <a href="https://www.linkedin.com/in/jayzur-gandia-559904192/" target="_blank" rel="noopener noreferrer"><img src={require('../assets/images/linkedin.png')} alt="social"/></a>
                </li>
                <li className="social">
                    <a href="https://www.deviantart.com/jyzrgrfx" target="_blank" rel="noopener noreferrer"><img src={require('../assets/images/deviantart.png')} alt="social"/></a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
