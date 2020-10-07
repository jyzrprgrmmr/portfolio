import React from 'react';
import Hero from '../Hero';
import Intro from '../Intro';
import Skillset from '../Skillset';
const Home = () => {
    return (
        <div className="home-container">
            <Hero/>
            <Intro/>
            <Skillset/>
        </div>
    )
}

export default Home
