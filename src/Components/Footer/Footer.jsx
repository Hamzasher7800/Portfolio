import React from 'react'
import "./footer.css"
import logo from "../../assets/logo1.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>I'm a frontend developer from Pakistan with 3+ year of experience</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src="" alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>2024 Hamza Sher. All rights</p>
        <div className="footer-bottom-right">
            <p>Terms of services</p>
            <p>Privacy Policy</p>
            <p>Connct with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
