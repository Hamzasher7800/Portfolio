import React from 'react'
import "./services.css"
import backgroundlogo from "../../assets/backgroundlogo.svg"
import Service_Data from "../../assets/service_data"
import arrow from "../../assets/arrow.svg"
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={backgroundlogo} alt="" />
      </div>
      <div className="services-container">
        {Service_Data.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Readmore</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
