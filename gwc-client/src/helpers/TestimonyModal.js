import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const TestimonyModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      closeIcon
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      trigger={<Button color='teal'>Learn More</Button>}
    >
      <Header icon>
        <Icon name='comments' />
        Testimonial
      </Header>
      <Modal.Content>
        <p>Here is some text containing the testimonial.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={handleClose}>
          <Icon name='checkmark' /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default TestimonyModal;
