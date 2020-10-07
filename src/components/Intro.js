import React from 'react'
import './Intro.css'
const Intro = () => {
    return (
        <div className="introduction">
            <img src={require('../assets/images/avatar.png')} className="avatar" alt="avatar"/>
            <div className="greeting">
                <h2 className="heading">HI! I'M JAYZUR. HOW DO YOU DO?</h2>
                <p className="content">
                    A web developer sprinkled with some 
                    graphic illustration and art skill.A fresh graduate, 
                    although I have worked as a frontend web developer but 
                    just  for a short period of time.
                </p>
            </div>
        </div>
    )
}

export default Intro
