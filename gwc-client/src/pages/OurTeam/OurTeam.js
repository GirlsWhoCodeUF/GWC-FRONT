/*import React from 'react'

function OurTeam() {
  return (
    <div>Our Team includes eboard, chairs and dev team</div>
  )
}

export default OurTeam */


import React from "react";
import { Container, Header, Divider, Image} from "semantic-ui-react";
//import ContactInfo from "../../helpers/ContactInfo";
//import GwcArt2 from "c:/Users/bgaya/GWC/client/src/OfficerImages/GwcArt2.png"; 

function EBoard() {
  return (
    <div className="body" >
      <div className="masthead masthead-eboard">
        <div className="overlay-blue">
            <Image centered src={GwcArt2}/> 
            <Divider hidden/>
            <Container textAlign='center'> <Header as='h1' inverted color='black'>Executive Board</Header> </Container>
                <Divider hidden />
        </div>
      </div>
      <ContactInfo />
    </div>
  );
}

export default EBoard;