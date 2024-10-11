import React from 'react'
import "./myWork.css"
import backgroundlogo from "../../assets/backgroundlogo.svg"
import MyWork_Data from '../../assets/MyWork'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={backgroundlogo} alt="" />
        </div>
        <div className="mywork-container">
        {MyWork_Data.map((work, index) => {
          return (
            work.w_url ? (
              <a key={index} href={work.w_url} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.w_name} />
              </a>
            ) : (
              <img key={index} src={work.w_img} alt={work.w_name} />
            )
          );
        })}
      </div>
        <div className="mywork-showmore">
            <p>Showmore</p>
            <img src="" alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
