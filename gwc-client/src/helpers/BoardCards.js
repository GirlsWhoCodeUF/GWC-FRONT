import React from "react";
import { Card, Button, Image, Divider, Segment, Container, Header } from "semantic-ui-react";

function BoardCards(image, name, position) {
  return (
    <>
      <Card fluid>
        <Card.Content textAlign="center">
        <Header as='h5'>{position}</Header>
            <Image floated='center' size= 'medium' src = {image} circular/>
                <Card.Header>{name}</Card.Header>
                    <Divider hidden />
                        <div>
                          <div className='ui two buttons'>
                              <Button color='teal'> Contact Me </Button>
                          </div>
                        </div>
        </Card.Content>
      </Card>
    </>
  );
}

export default BoardCards;