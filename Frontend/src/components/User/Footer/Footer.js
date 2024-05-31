import React, { useState } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import ChatModal from "../../Modal/ChatModal";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleChatModal = () => {
    setModalOpen(true);
  };
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "5em 0em" }}
      className="footer-segment"
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">
                <Link to="/contactus">
                  <span className="black-text">
                    <b>Contact Us</b>
                  </span>
                </Link>
              </List.Item>
              <List.Item as="a">
                <Link to="/aboutus">
                  <span className="black-text">
                    <b>About Us</b>
                  </span>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header inverted as="h4" content="Support" />
            <List link inverted>
              <List.Item as="a">
                <Link to="/help_centre">
                  <span className="black-text">
                    <b>Help center</b>
                  </span>
                </Link>
              </List.Item>
              <List.Item as="a">
                <Link to="/terms_conditions">
                  <span className="black-text">
                    <b> Terms and Conditions</b>
                  </span>
                </Link>
              </List.Item>
              <List.Item as="a">
                <Link to="/privacy_policy">
                  <span className="black-text">
                    <b>Privacy Policy</b>
                  </span>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header inverted as="h4" content="Connect with Us" />
            <FontAwesomeIcon
              icon={faRocketchat}
              onClick={handleChatModal}
              size="3x"
            />
          </Grid.Column>
        </Grid>
        <ChatModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <Divider inverted section />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            <Link to="/terms_conditions">
              <span className="black-text">
                <b>Terms and Conditions</b>
              </span>
            </Link>
          </List.Item>
          <List.Item as="a" href="#">
            <Link to="/privacy_policy">
              <span className="black-text">
                <b>Privacy Policy</b>
              </span>
            </Link>
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
