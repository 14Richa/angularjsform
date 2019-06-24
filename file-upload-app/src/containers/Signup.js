import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
      last: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="first" bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              autoFocus
              type="first"
              value={this.state.first}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="last" bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              value={this.state.last}
              onChange={this.handleChange}
              type="last"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>E-mail</ControlLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
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
          <LinkContainer to="/congrats">

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
          </LinkContainer>
        </form>
      </div>
    );
  }
}
