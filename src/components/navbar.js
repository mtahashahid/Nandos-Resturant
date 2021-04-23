import React, { Component } from "react";
import logo from "../assets/images/logo.jpg";
import "../App.css";
class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { background: "black", color: "white" };
  }
  render() {
    return (
      <div>
        <nav style={{ backgroundColor: this.state.background }}>
          <div className="nav-wrapper">
            <a href="!#" className="left brand-logo" style={{paddingLeft: 20, color: this.state.color}}>
              <img
                className="circle"
               
                src={logo}
                alt="logo"
              />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default navbar;
