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
            <a
              href="!#"
              className="left brand-logo"
              style={{ paddingLeft: 20, color: this.state.color }}
            >
              <img className="circle" src={logo} alt="logo" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="!#" className="bold-text">
                  Home
                </a>
              </li>
              <li>
                <a href="!#" className="bold-text">
                  About Us
                </a>
              </li>
              <li>
                <a href="!#" className="bold-text">
                  Menu
                </a>
              </li>
              <li>
                <a href="!#" className="bold-text">
                  Contact
                </a>
              </li>
              <li>
                <a href="!#" className="waves-effect waves-green btn-small red bold">
                  <i className="material-icons right ">local_grocery_store</i>Order
                  Now
                </a>
              </li>
              {/* <li>
                <i className="fa fa-search" style={{paddingRight: 10, fontSize:24}}></i>
              </li>
              <li>
                <i className="fa fa-facebook" style={{paddingRight: 10, fontSize:24}}></i>
              </li>
              <li>
                <i className="fa fa-instagram" style={{paddingRight: 25, fontSize:24}}></i>
              </li> */}
              {/* <li>
                <i className="fa fa-twitter" style={{paddingRight: 10, fontSize:24}}></i>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default navbar;
