import React, { Component } from "react";
import logo from "../assets/images/logo.jpg";
import "../App.css";
import M from 'materialize-css'
class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { background: "black", color: "white" };
  }
  componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }
  render() {
    return (
      <>
        <nav style={{ backgroundColor: this.state.background }}>
          <div className="nav-wrapper">
          <a href="#" data-target="mobile-demo" class="right sidenav-trigger"><i class="material-icons">menu</i></a>
            <a
              href="!#"
              className="left brand-logo"
              style={{ paddingLeft: 20, color: this.state.color }}
            >
              <img style={styleBox.circle} src={logo} alt="logo" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="!#" style={styleBox.boldtext}>
                  Home
                </a>
              </li>
              <li>
                <a href="!#" style={styleBox.boldtext}>
                  About Us
                </a>
              </li>
              <li>
                <a href="!#" style={styleBox.boldtext}>
                  Menu
                </a>
              </li>
              <li>
                <a href="!#" style={styleBox.boldtext}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="!#"
                  className="waves-effect waves-light btn-small red bold" 
                >
                  <i className="material-icons right ">local_grocery_store</i>
                  Order Now
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
        <ul className="sidenav" id="mobile-demo">
          <li><a href="#top">Home</a></li>
          <li><a href="#aboutus">About us</a></li>
          <li><a href="#appeteasers">Menu</a></li>
          <li><a href="#aboutus">Contacts</a></li>
          <li>
            <i className="fa fa-facebook"  style={{fontSize: 24 , paddingRight: 20, paddingLeft: 20}}></i>
            <i className="fa fa-instagram" style={{fontSize: 24 , paddingRight:20, paddingLeft: 20}}></i>
            <i className="fa fa-twitter	"  style={{fontSize: 24 , paddingRight: 20, paddingLeft: 20}}></i>
          </li>
        </ul>
      </>
    );
  }
}
const styleBox = {
  boldtext:{
    fontWeight: 'bold'
  },
  circle:{
    borderRadius: '50%'
}
}
export default navbar;
