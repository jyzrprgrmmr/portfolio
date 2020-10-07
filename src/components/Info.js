import React from 'react'
import './Info.css'
const Info = () => {
    return (
        <div className="info-container">
            <h2 className="heading">PERSONAL INFO</h2>
            <div className="info-content">
                <p className="content"><span>FULLNAME: </span>JAYZUR LAPEÑA GANDIA</p>
                <p className="content"><span>BIRTHDATE: </span>AUGUST 10,1996</p>
                <p className="content"><span>ADDRESS: </span>MINALIN, PAMPANGA</p>
                <p className="content"><span>CONTACT #: </span>09954561053</p>
                <p className="content"><span>EMAIL: </span>jayzurgandia@gmail.com</p>
            </div>

            <h2 className="heading">EDUCATION</h2>
            <div className="info-content1">
                <p className="content"><span>COLLEGE:</span></p>
                <p className="content">URDANETA CITY UNIVERSITY</p>
                <p className="content">Urdaneta City, Pangasinan</p>
                <p className="content">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>
                <p className="content">2014-2015</p>
            </div>

            <h2 className="heading">WORK EXPERIENCE</h2>
            <div className="info-content">
                <p className="content"><span>FRONTEND WEB DEVELOPER:</span></p>
                <p className="content">EASYCOM JAPAN PHILIPPINES INTERNATIONAL INC.</p>
                <p className="content">Urdaneta City,Pangasinan</p>
                <p className="content">October 2019 - Feb 2020</p>
            </div>
        </div>
    )
}

export default Info
