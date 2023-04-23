import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const GenerateModal = ({ name, position, email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Modal
      trigger={
        <Button onClick={handleOpen} color="teal">
          Contact Me
        </Button>
      }
      open={isOpen}
      onClose={handleClose}
      closeIcon
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <p>{email}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} negative>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default GenerateModal;
