import React from 'react'
import "./about.css"
import backgroundlogo from "../../assets/backgroundlogo.svg"
import pic from "../../assets/pic.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={backgroundlogo} alt="" />
        </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={pic} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>i'm a experienced frontend devloper </p>
                <p>my passion for frontend developnment is not only </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Tailwind CSS</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Bootstrap</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>React JS </p> <hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Node JS</p> <hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achivement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>4+</h1>
            <p>HAPPY CUSTOMERS</p>
        </div>
      </div>
    </div>
  )
}

export default About
