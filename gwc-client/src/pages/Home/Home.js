import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar'

const Home = () => {
  return (
    <div className="home">
      <div className="landing-info">
        <div className="background">
          <div className="left-box">
            <h2 className="school-name">UNIVERSITY OF FLORIDA</h2>
            <h3 className="org-name"><span>Girls</span><span>WHO</span> <span>CODE</span></h3>
            <p className='statement'>On a mission to close the gender gap in tech.</p>
          </div>
          <div className="right-box"></div>
        </div>
        <div className="event-box"></div>
      </div>
    </div>
  )
}

export default Home;

