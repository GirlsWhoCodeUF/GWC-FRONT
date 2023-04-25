import React from 'react';
import { Card, Image, Button, Modal } from 'semantic-ui-react';

const TestimonyCard = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Card>
      <Image src={props.imgSrc}/>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleOpenModal}>Read More</Button>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Modal.Header>{props.title}</Modal.Header>
          <Modal.Content>
            <p>{props.testimony}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={handleCloseModal}>Close</Button>
          </Modal.Actions>
        </Modal>
      </Card.Content>
    </Card>
  );
};

export default TestimonyCard;
