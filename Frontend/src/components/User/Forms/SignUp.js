import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoginModal from "../UI/LoginModal";

import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  Segment,
  ModalDescription,
} from "semantic-ui-react";
import axios from "axios";
const SignUp = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const [status, setStatus] = useState();
  const addUser = async () => {
    let response = await axios.post("http://localhost:2000/addUser", {
      Name: name,
      Email: email,
      Phone: phone,
      Password: password,
    });

    setStatus(response.data);
  };
  return (
    <>
      <Segment inverted color="gray">
        <Form onSubmit={addUser}>
          <FormGroup unstackable widths={2}>
            <FormInput
              label="Name"
              placeholder="Name"
              icon="user"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <FormInput
              label="Email"
              placeholder="Email"
              icon="envelope"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup widths={2}>
            <FormInput
              label="Phone"
              placeholder="Phone"
              icon="phone"
              required
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormInput
              label="Password"
              placeholder="Password"
              icon="lock"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormCheckbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
      <ModalDescription>
        <h3>
          Already have an Account <LoginModal />?
        </h3>

        <h3>{status}</h3>
      </ModalDescription>
    </>
  );
};

export default SignUp;
