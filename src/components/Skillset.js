import React from 'react';
import './Skillset.css';

const Skillset = () => {
    return (
        <div className="skillset">
            <h2 className="heading">MASTERY</h2>
            <ul className="mastery">
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/html5.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">HTML</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/css-3.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">CSS</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/scss.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">SCSS</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/jquery.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">JQUERY</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/javascript.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">JAVASCRIPT</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/angular.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">ANGULAR</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/react.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">REACTJS</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/nodejs.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">NODEJS</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/mysql.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">MYSQL</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/php.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">PHP</p>
                </li> 
            </ul>

            <h2 className="heading">WEAPONS I USE</h2>
            <ul className="mastery">
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/vs-code.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">VS CODE</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/atom-editor.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">ATOM</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/sublime-text.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">SUBLIME</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/git.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">GIT</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/photoshop.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">PHOTOSHOP</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/adobe-illustrator.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">ILLUSTRATOR</p>
                </li>
                <li className="mastery-item">
                    <div className="mastery-img">
                        <img src={require('../assets/images/slack.png')} alt="icon" width="50" height="50"/>
                    </div>
                    <p className="content">SLACK</p>
                </li>
            </ul>
        </div>
    )
}

export default Skillset
