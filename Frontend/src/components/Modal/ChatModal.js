import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormInput,
  FormGroup,
  Button,
  Form,
  Segment,
  Grid,
  GridColumn,
  Modal,
  ModalDescription,
} from "semantic-ui-react";

const ChatModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_nikikfb";
    const templateId = "template_uqrpppv";
    const publicKey = "ua5Z1q-tBtMUUGzD2";

    const templateParmas = {
      from_name: name,
      from_email: email,
      to_name: "Akash/Swati/Shubham",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParmas, publicKey)
      .then((response) => {
        setStatus("Email send Successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        setStatus("Error sending Email");
      });
  };
  return (
    <Modal open={isOpen} onClose={onClose} style={{ width: "30%" }}>
      <Segment inverted color="gray">
        <Form inverted onSubmit={handleSubmit}>
          <FormGroup widths="equal">
            <Grid columns={1}>
              <GridColumn>
                <FormInput
                  style={{ width: "25em", marginBottom: "2em" }}
                  fluid
                  icon="user"
                  iconPosition="right"
                  label={<label style={{ color: "black" }}>Name</label>}
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <FormInput
                  style={{ marginBottom: "1.5em" }}
                  fluid
                  icon="envelope"
                  iconPosition="right"
                  label={<label style={{ color: "black" }}>Email</label>}
                  placeholder="Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                  style={{ marginBottom: "1.5em" }}
                  fluid
                  iconPosition="right"
                  icon="comment"
                  label={<label style={{ color: "black" }}>Message</label>}
                  placeholder="Enter Your Message"
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </GridColumn>
            </Grid>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
      <ModalDescription>
        <h3>{status}</h3>
      </ModalDescription>
      <Modal.Actions>
        <Button color="black" onClick={onClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ChatModal;
