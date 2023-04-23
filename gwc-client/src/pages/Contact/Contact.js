import React from "react";
import "./Contact.css";
import { Button, TextArea, Form, Container, Grid } from "semantic-ui-react";

const Contact = () => {
  return (
    <Container>
      <h1>Get in touch with us!</h1>
      <Grid className="center aligned">
        <Grid.Column width={8}>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Affiliation</label>
              <input placeholder="Affiliation" />
            </Form.Field>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Tell us more!"
              placeholder="Tell us more!"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Contact;
