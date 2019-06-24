import React, { Component } from "react";
import "./Home.css";



export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Congratulations!</h1>
          <p>You have succesfully registered your account.</p>
        </div>
      </div>
    );
  }
}