import React from 'react';
import { Card, Image, Header, Divider } from 'semantic-ui-react';
import GenerateModal from './generateModal';

const BoardCards = (image, name, position, email) => {
  const popup = GenerateModal({name, position, email});

  return (
    <Card fluid>
        <Card.Content textAlign="center">
        <Header as='h5'>{position}</Header>
          <Image
            floated='center'
            src={image}
            circular
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
                <Card.Header>{name}</Card.Header>
                    <Divider hidden />
                        <div>
                          {popup}
                        </div>
        </Card.Content>
      </Card>
  );
};

export default BoardCards;
