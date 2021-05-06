import React, { Component } from "react";
import M from "materialize-css";
import AppeteasersImg from "../../../assets/images/Parallaxes/appeteasers.jpg";
import {Data} from '../../../Data/Data'
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
            <hr style={{ background: "grey" }} />
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
          <div className="container">
            <h3
              style={{
                fontFamily: "Lobster, cursive",
                // fontStyle: "italic",
              }}
            >
              Menu
            </h3>
            <ProductSlider data={Data.categorys[0]["menu-items"]} styleClass={"light-slider"} />
          </div>
          <div className="parallax">
            <img src={AppeteasersImg} alt="banner" />
          </div>
        </div>
      </div>
    );
  }
}
export default Appeteasers;
