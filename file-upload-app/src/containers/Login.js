import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { LinkContainer } from "react-router-bootstrap";

export default class Login extends Component {
  // This is a object which store what the user enter in the form.
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  // function to check the validation of the form 
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  // function which update the state when the user type something 

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>E-mail</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LinkContainer to="/sucess">
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          </LinkContainer>
        </form>
      </div>
    );
  }
}
