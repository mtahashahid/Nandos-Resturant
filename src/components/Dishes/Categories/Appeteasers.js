import React, { Component } from "react";
import M from "materialize-css";
import AppeteasersImg from "../../../assets/images/Parallaxes/appeteasers.jpg";
class Appeteasers extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div id="appeteasers">
        <div className="section white">
          <div className="row container" style={{ marginBottom: 0 }}>
            <h2
              className="header"
              style={{
                fontFamily: "Parisienne, cursive",
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              Appeteasers
            </h2>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img src={AppeteasersImg} alt="banner" />
          </div>
        </div>
      </div>
    );
  }
}
export default Appeteasers;
