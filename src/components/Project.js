import React from 'react'
import './Project.css'
import Illustrations from './Illustrations'
const Project = () => {
    return (
        <div className="project-container">
            <h2 className="heading">PROJECTS</h2>
            <ul className="project-list">
                <li className="project-item">
                    <h2>COVID TRACKER</h2>
                    <img class="project" alt="project" src={require('../assets/images/project1.png')}/>
                    <p>CovidTracker is an Angular Web App that allows monitoring of the development 
                        or spread of the corona virus. 
                    </p>
                    <a href="https://covidtracker-angular.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </li>

            </ul>

            <h2 className="heading">ME AS AN ILLUSTRATOR</h2>
            <Illustrations/>


        </div>
    )
}

export default Project
