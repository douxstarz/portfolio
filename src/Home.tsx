import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css'

function Home() {
  

  return (
    <>
      <div>
        <h1 className="title-hi">Hello!</h1>
        <h1 className="title-me">I'm Sophia</h1>
        
        <NavLink className="about" to="About">ABOUT ME</NavLink>
        <NavLink className="contact" to="Contact">CONTACT ME</NavLink>
    
        <div className="avatar"></div>
        
        <img className="star" src="https://i.pinimg.com/564x/42/ba/ff/42baff306fcb8178ace942f8e65c0505.jpg"/>
        
    </div>
    </>
  )
}

export default Home