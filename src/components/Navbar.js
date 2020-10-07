import React , {useState}  from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/images/logo.png";
import dagger from "../assets/images/dagger.png";
import './Navbar.css'
const Navbar = () => {

    const [click,setClick] = useState(false);
    const handleClick = ()=> setClick (!click);

    return (
            <div className="nav-container">
                <nav>
                   <Link to="/" className="brand">
                    <img src={logo} alt="logo" className="logo"/>
                    <h2 className="logo-name">JYZR<span>GND</span></h2>
                </Link>

                <div className="menu-icon" onClick ={handleClick}>
                    <img src={dagger} alt="dagger" className={click ? 'dagger-open' : 'dagger'}></img>
                    <img src={dagger} alt="dagger" className={click ? 'dagger-open' : 'dagger'}></img>
                    <img src={dagger} alt="dagger" className={click ? 'dagger-open' : 'dagger'}></img>
                </div>

                <ul className={click ? 'menu-links open' : 'menu-links'}>
                    <Link to="/about" className="links" onClick ={handleClick}><li>ABOUT</li></Link>
                    <Link to="/work" className="links" onClick ={handleClick}><li>WORK</li></Link>
                    <li className="links" onClick ={handleClick}>SAY HELLO</li>
                </ul> 
                </nav>
                
            </div>
    )
}

export default Navbar
