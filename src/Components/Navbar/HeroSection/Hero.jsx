import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import image2 from "../../../assets/image2.png"
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={image2} alt="" />
        <h1><span>I'm Hamza Sher,</span> frontend developer based in Islamabad.  </h1>
        <p>i'm a frontend developer from Islamabad, Pakistan with 3 years of experience in multiple company like Eziline , Johar Software House  </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
            </div>      
    </div>
  )
}

export default Hero
