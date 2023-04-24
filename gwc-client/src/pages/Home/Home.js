import React from "react";
import "./Home.css";
import BriannaRodriguezImage from "../../officerImages/BriannaRodriguez.PNG";
import TanyaCharanImage from "../../officerImages/TanyaCharan.jpeg";
import VictoriaDeAlbaImage from "../../officerImages/VictoriaDeAlbaExternalVP.jpeg";
import NavBar from "../../components/Navbar";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="home">
      <div class="ui inverted vertical masthead center aligned segment hero">
        <div class="ui text container">
          <h1 class="ui inverted header">Girls Who Code @ UF</h1>
          <h2>On a mission to close the gender gap in tech.</h2>
          <button class="ui huge secondary button">
            Learn More <i class="right arrow icon"></i>
          </button>
        </div>
      </div>

      <div className="mission-text">
        <div class="ui stackable relaxed three column grid container">
          <div class="column">
            <h2>BUILD SISTERHOOD</h2>
            <h3>
              College & Career programs connect young women and non-binary
              people who are interested in tech to build a supportive community
              that helps them persist and succeed in the field.
            </h3>
          </div>
          <div class="column">
            <h2>BUILD LEADERSHIP</h2>
            <h3>
              College & Careers offer students and young professionals
              opportunities to practice leadership and learn from peers and
              industry role models.
            </h3>
          </div>
          <div class="column">
            <h2>BUILD YOUR CAREER</h2>
            <h3>
              College & Career programs provide college-aged students and early
              career professionals with exclusive opportunities to build
              relationships with industry professionals, develop and practice
              key skills, and connect with Girls Who Code corporate partners for
              internships and jobs.
            </h3>
          </div>
        </div>
      </div>

      <h1>TESTIMONIALS</h1>
      <div className="testimonials">
        <div class="ui centered stackable cards container">
          <div class="card">
            <div class="image">
              <img src={TanyaCharanImage}></img>
            </div>
            <div class="content">
              <div class="header">
                "Girls Who Code has helped me find a community of people who
                have similar interests to my own. It’s helped me get mentorship
                about internship opportunities and connected me to companies
                looking to hire college students like me. I am very grateful for
                the friends I have made through this organization and the skills
                I have learned through their many workshops and events."
              </div>
              <div class="meta">
                <p></p>
                <a>Tanya Charan</a>
                <p></p>
                <a>3rd Year - Soil & Water Science</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src={BriannaRodriguezImage}></img>
            </div>
            <div class="content">
              <div class="header">
                "Joining Girls Who Code was one of the best decisions I have
                ever made. As an introverted person, I often found it
                challenging to express myself and share my ideas with others.
                However, being a part of this organization has helped me break
                out of my shell and become more confident in my abilities.
                <p></p>
                <p></p>
                Working alongside other girls my age who share the same
                passions, interests, and career goals as me has been an
                incredibly empowering experience. Knowing that I am not alone in
                my journey towards a career in technology makes me feel safe and
                supported within my field.
                <p></p>
                <p></p>
                The tech industry can be intimidating, especially for women, who
                are often underrepresented and undervalued. However, being a
                part of Girls Who Code reassures me that I have a community of
                supportive, like-minded individuals who are there to help me
                navigate this challenging landscape.
                <p></p>
                <p></p>I am so grateful for everything that Girls Who Code has
                done for me. Thanks to this organization, I am now more
                confident, more passionate, and more motivated than ever before.
                I cannot wait to see what the future holds for me and for all of
                the amazing women in this organization."
              </div>
              <div class="meta">
                <p></p>
                <a>Brianna Rodriguez</a>
                <p></p>
                <a>4th Year - Computer Engineering</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src={VictoriaDeAlbaImage}></img>
            </div>
            <div class="content">
              <div class="header">
                "My experience with Girls Who Code has been amazing. I've built
                empowering friendships with girls who share my passion for
                coding, and I've had the opportunity to serve as social chair,
                Vice President, and now President of the club. Through Girls Who
                Code, I've found a supportive community on campus that feels
                like a sisterhood. It's helped me feel more connected to my
                campus community and overcome imposter syndrome. I'm proud of
                the work we've done to promote coding, and I'm excited to
                continue as a leader and advocate for girls in tech."
              </div>
              <div class="meta">
                <p></p>
                <a>Victoria De Alba</a>
                <p></p>
                <a>3rd Year - Computer Science</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
