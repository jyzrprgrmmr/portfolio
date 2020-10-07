import React from 'react'
import './Project.css'
import Illustrations from './Illustrations'
const Project = () => {
    return (
        <div className="project-container">
            <h2 className="heading">PROJECTS</h2>
            <ul className="project-list">
                <li className="project-item">
                    <h2>PROJECT 1</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book.It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </li>

                <li className="project-item">
                    <h2>PROJECT 2</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book.It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </li>

                <li className="project-item">
                    <h2>PROJECT 3</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </li>
            </ul>

            <h2 className="heading">ME AS AN ILLUSTRATOR</h2>
            <Illustrations/>


        </div>
    )
}

export default Project