import React from 'react'
import Carousel from 'nuka-carousel';
import './Illustrations.css'
const Illustrations = () => {
  return (
    <div className="carousel-container" onContextMenu={(e)=>  {e.preventDefault();}}>
      <Carousel className="carousel" cellAlign="center" >
        <img className="car-img" src={require('../assets/illustrations/1.png')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/2.jpg')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/3.jpg')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/4.jpg')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/5.png')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/6.png')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/7.png')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/8.jpg')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/9.jpg')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/10.jpg')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/11.png')} alt="illustrations"/>
        <img className="car-img" src={require('../assets/illustrations/12.png')} alt="illustrations"/>
        
      </Carousel>
    </div>
    
  )
}

export default Illustrations
