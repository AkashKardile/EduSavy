import React from "react";
import { Header, Divider, Grid, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about-us">
      <Header as="h2">About us</Header>

      <Divider />

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3">Our Mission</Header>
            <p>
              At EduSavy, our mission is to empower individuals and
              organizations to achieve their learning goals efficiently and
              effectively through innovative online learning experiences.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3">Our Values</Header>
            <List bulleted>
              <List.Item>
                Excellence: We are committed to delivering high-quality,
                engaging, and interactive learning experiences.
              </List.Item>
              <List.Item>
                Accessibility: We believe in providing equal access to education
                for all individuals, regardless of their background or
                circumstances.
              </List.Item>
              <List.Item>
                Innovation: We continuously explore new technologies and
                methodologies to enhance the learning experience for our users.
              </List.Item>
              <List.Item>
                Collaboration: We foster a culture of collaboration and
                partnership, both internally with our team members and
                externally with educators, institutions, and industry partners.
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        <Divider />

        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3">Our Team</Header>
            <List divided relaxed>
              <List.Item>
                <List.Content>
                  <List.Header as="a">Aaksh Kardile</List.Header>
                  <List.Description>B.E Mech</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header as="a">Shubham Borate</List.Header>
                  <List.Description>B.E Comp</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header as="a">Swati Raskonda</List.Header>
                  <List.Description>BCS</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        <Divider />

        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3">Contact Us</Header>
            <p>
              Have questions or feedback? We'd love to hear from you! Contact us
              at <a href="mailto:info@example.com">edusavyinfo@gmail.com</a>
              or <a href="tel:+1234567890">8378895600</a>.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default AboutUs;
