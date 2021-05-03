import React, { Component } from "react";
import bannerImg from "../assets/images/banner.jpg";
import M from "materialize-css";
class Banner extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div>
        <div className="parallax-container">
          <p style={stylebox.name}>Nando's</p>
          <div className="parallax">
            <img src={bannerImg} alt="banner" />
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <a href="!#" class="btn-floating pulse" style={{background:'black', margin: '20px auto', display:"block"}}>
            <i class="material-icons">arrow_drop_down</i>
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
    opacity: " 0.8",
    textTransform: "uppercase",
    color: "white",
    fontWeight: 500,
    fontSize: 70,
    background: "rgba(100,100,100,0.5)",
    borderColor: " rgb(100, 100, 100)",
    marginTop: "6%",
  },
};
export default Banner;
