import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Navbar/HeroSection/Hero'
import About from './Components/About/About'
import Services from './Components/Services/services'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/Footer'
import MyWork from './Components/MyWork/myWork'

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
