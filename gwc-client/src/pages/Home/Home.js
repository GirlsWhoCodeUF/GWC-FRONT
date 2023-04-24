import React from "react";
import "./Home.css";
import BriannaRodriguezImage from "../../officerImages/BriannaRodriguez.PNG";
import TanyaCharanImage from "../../officerImages/TanyaCharan.jpeg";
import VictoriaDeAlbaImage from "../../officerImages/VictoriaDeAlbaExternalVP.jpeg";
import NavBar from "../../components/Navbar";
import { Button } from "semantic-ui-react";

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
