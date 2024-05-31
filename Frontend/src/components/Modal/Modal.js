import React from "react";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";

function ShowModal(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>{props.buttonName}</Button>}
      size="tiny"
    >
      <ModalHeader>{props.buttonName} to Your EduSavy Account</ModalHeader>
      <ModalContent>{props.children}</ModalContent>
      <ModalActions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default ShowModal;
