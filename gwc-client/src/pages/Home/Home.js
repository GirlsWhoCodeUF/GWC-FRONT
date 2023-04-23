import React from "react";
import "./Home.css";
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
              Join a community of like-minded women who share a passion for
              coding and technology. Through Girls Who at UF, you'll have the
              opportunity to connect with other students who are pursuing
              careers in tech and build lifelong friendships. By working
              together, sharing experiences, and supporting each other, you'll
              be able to create a network of supportive sisters that will be
              there for you throughout your career.
            </h3>
          </div>
          <div class="column">
            <h2>BUILD LEADERSHIP</h2>
            <h3>
              Girls Who Code at UF empowers women to become leaders in
              technology. Through our programs and events, you'll gain the
              skills and knowledge needed to succeed in your career, and you'll
              have the opportunity to develop your leadership skills. You'll
              learn how to take charge, collaborate effectively, and inspire
              others to achieve their goals. Whether you want to lead a team,
              start your own business, or make a difference in your community,
              we will provide you with the tools you need to succeed.
            </h3>
          </div>
          <div class="column">
            <h2>BUILD YOUR CAREER</h2>
            <h3>
              Girls Who Code provides you with the resources and support you
              need to succeed in your career. Through our programs, you'll gain
              hands-on experience in coding and technology, and you'll have the
              opportunity to work on real-world projects. You'll learn from
              experienced professionals in the field, and you'll have access to
              resources that will help you land your dream job. Whether you want
              to work for a tech giant, a startup, or a nonprofit, Girls Who
              Code at UF will help you get there.
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
