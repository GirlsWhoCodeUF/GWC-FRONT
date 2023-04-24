import React from "react";
import './OurTeam.css'
import { Container, Header, Divider, Image } from "semantic-ui-react";
import ContactInfo from "../../helpers/ContactInfo";
import GwcArt2 from "../../images/GwcArt2.png";

function OurTeam() {
  return (
    <div className="ourTeam">
      <div className="masthead masthead-eboard">
        <div className="overlay-blue">
            <Image centered src={GwcArt2}/> 
            <Divider hidden/>
            <Divider hidden/>
        </div>
      </div>
      <ContactInfo />
    </div>
  )
}

export default OurTeam 
