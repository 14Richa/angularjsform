import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";




class App extends Component {

  constructor(props) {
   super(props);
   this.state = {value: 0};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.state.value += 1; 
    alert('Count is' + this.state.value);

    event.preventDefault();
  }


  render() {

    
    return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem>Register</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
            <LinkContainer to = "/about/value" >
            <NavItem onClick={this.handleSubmit}>About</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
     

    </div>
    );
  }
}



export default App;
