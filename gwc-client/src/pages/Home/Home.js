import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar'
import { Button } from 'semantic-ui-react'


const Home = () => {
  return (
    <div className="home">
      <div className="landing-info">
        <div className="background">
          <div className="left-box">
            <div className="left-box-text">
              <h2 className="school-name">University of Florida</h2>
              <h1 className="club-name">GIRLS WHO CODE</h1>
              <h3>On a mission to close the gender gap in tech.</h3>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="right-box"></div>
        </div>
        <div className="event-box"></div>
      </div>
      
      <div className="mission-text">
        <div class="ui stackable relaxed three column grid">
          <div class="column">
            <h2>BUILD SISTERHOOD</h2>
            <h3>College & Career programs connect young women and non-binary people who are interested in tech to build a supportive community that helps them persist and succeed in the field.</h3>
          </div>
          <div class="column">
            <h2>BUILD LEADERSHIP</h2>
            <h3>College & Careers offer students and young professionals opportunities to practice leadership and learn from peers and industry role models.</h3>
          </div>
          <div class="column">
            <h2>BUILD LEADERSHIP</h2>
            <h3>College & Career programs provide college-aged students and early career professionals with exclusive opportunities to build relationships with industry professionals, develop and practice key skills, and connect with Girls Who Code corporate partners for internships and jobs.</h3>
          </div>
        </div>
      </div>

      <h1>TESTIMONIALS</h1>
      <div className="testimonials">
        <div class="ui centered stackable cards">
          <div class="card">
            <div class="image">
              <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"></img>
            </div>
            <div class="content">
              <div class="header">"This is a very long quote and a test to see how wrapping works."</div>
              <div class="meta">
                <a>Name</a>
                <a>2nd year Computer Science major</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"></img>
            </div>
            <div class="content">
              <div class="header">"This is a very long quote and a test to see how wrapping works."</div>
              <div class="meta">
                <a>Name</a>
                <a>2nd year Computer Science major</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"></img>
            </div>
            <div class="content">
              <div class="header">"This is a very long quote and a test to see how wrapping works."</div>
              <div class="meta">
                <a>Name</a>
                <a>2nd year Computer Science major</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home;

