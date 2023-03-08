import React from "react";
import { Card, Button, Image, Divider, Segment, Container, Header } from "semantic-ui-react";
import PopUpInfo from "./PopUp"

function BoardCards(image, name, position, email) {
  return (
    <>
      <Card fluid>
        <Card.Content textAlign="center">
        <Header as='h5'>{position}</Header>
            <Image floated='center' size= 'medium' src = {image} circular/>
                <Card.Header>{name}</Card.Header>
                    <Divider hidden />
                    {PopUpInfo({email})}
        </Card.Content>
      </Card>
    </>
  );
}

export default BoardCards;

