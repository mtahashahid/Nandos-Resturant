import React, { Component } from "react";
import bannerImg from "../assets/images/banner.jpg";
import M from "materialize-css";
import {Data} from '../Data/Data'
import "../../src/index.css";
class Banner extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div>
        <div className="parallax-container">
          <p style={stylebox.name} >{Data["restaurant-info"].name}</p>
          <div className="parallax">
            <img src={bannerImg} alt="banner" />
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <a href="!#" className="btn-floating pulse" style={{background:'black', margin: '20px auto', display:"block"}}>
            <i className="material-icons">arrow_drop_down</i>
          </a>
        </div>
      </div>
    );
  }
}
const stylebox = {
  name: {
    fontFamily: "Pacifico, cursive",
    textAlign: "center",
    // opacity: " 0.9",
    textTransform: "uppercase",
    color: "white",
    fontWeight: 500,
    fontSize: "4.5rem",
    background: "rgba(100,100,100,0.5)",
    borderColor: " rgb(100, 100, 100)",
    marginTop: "6rem",
  },
};
export default Banner;
