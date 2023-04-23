import "./Home.css";
import { Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { React, useState } from "react";

const Home = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="home">
      <div class="ui inverted vertical masthead center aligned segment hero">
        <div class="ui text container">
          <h1 class="ui inverted header">Girls Who Code @ UF</h1>
          <h2>On a mission to close the gender gap in tech.</h2>
          <h2></h2>
          <h2></h2>
          <Button
            icon
            labelPosition="right"
            class="ui huge secondary button"
            name="About Us"
            active={activeItem === "about us"}
            onclick={handleItemClick}
            as={Link}
            to="/About"
            basic
            inverted
            size="huge"
          >
            Learn More
            <Icon name="right arrow" />
          </Button>
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
              <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"></img>
            </div>
            <div class="content">
              <div class="header">
                "This is a very long quote and a test to see how wrapping
                works."
              </div>
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
              <div class="header">
                "This is a very long quote and a test to see how wrapping
                works."
              </div>
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
              <div class="header">
                "This is a very long quote and a test to see how wrapping
                works."
              </div>
              <div class="meta">
                <a>Name</a>
                <a>2nd year Computer Science major</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
