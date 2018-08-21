import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from 'firebase';

export default class Example extends React.Component {
  render() {
    return (
      <Form block className="Login-form">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <Button className="Login-button">Submit</Button>
      </Form>
    );
  }
}