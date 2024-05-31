import React, { useEffect, useState } from "react";
import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  Segment,
  ModalDescription,
 Grid,
  GridColumn,
} from "semantic-ui-react";
import axios from "axios";
import ShowModal from "../../Modal/Modal";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:2000/getUser", {
        Name: name,
        Password: password,
      });

      if (response.data != null) {
        let { Cart, Name, SubscribeCourses } = response.data;
        props.handleIsLogin();
        setLoginSuccess(true);
        alert("Login Successful");
      } else {
        setStatus("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setStatus("An error occurred during login");
    }
  };

  useEffect(() => {
    if (loginSuccess && props.isLogin) {
      navigate("/userLogin", {
        state: {
          Name: name,
          Cart: [],
          Names: name,
          SubscribeCourses: [],
          isLogin: props.isLogin,

          onClick: props.onClick,
        },
      });
    }
  }, [loginSuccess, props.isLogin, navigate, name, props.handleIsLogout]);

  return (
    <>
      <Segment inverted color="darkgray">
        <Form inverted onSubmit={handleLogin}>
          <FormGroup widths="equal">
<Grid columns={1} >
           <GridColumn> 
            <FormInput
              style={{ width: "25em", marginBottom: "2em"}}
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
              icon="lock"
              iconPosition="right"
              label={<label style={{ color: "black" }}>Password</label>}
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </GridColumn>
            
            </Grid>
          </FormGroup>
          <FormCheckbox 
  label={<label style={{ color: "black" }}>I agree to the Terms and Conditions</label>}
/>

          <Button type="submit">Login</Button>
        </Form>
      </Segment>
      <ModalDescription>
        <h3>
          Don't Have an account,
          <ShowModal buttonName="Sign Up">
            <SignUp />
          </ShowModal>
        </h3>
        <h3>{status}</h3>
      </ModalDescription>
    </>
  );
};

export default Login;
