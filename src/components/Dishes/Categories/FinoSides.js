import React, { Component } from "react";
import posterImg from "../../../assets/images/Parallaxes/finoSides.jpg";
import { Data } from "../../../Data/Data";
import ProductSlider from "../ProductSlider";
import M from "materialize-css";
class FinoSides extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div>
        <div className="section white">
          <div className="row container" style={{ marginBottom: 0 }}>
            <h2
              style={{
                fontFamily: "Parisienne, cursive",
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              {Data.categorys[1].name}
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
              {Data.categorys[1].discription}
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="container">
            <h3 style={{ fontFamily: "Lobster, cursive", 
            // fontStyle: "italic" 
            }}>Menu</h3>
            <ProductSlider data={Data.categorys[1]["menu-items"]} styleClass={"light-slider"} />
          </div>

          <div className="parallax">
            <img alt="parallax" width="100%" src={posterImg} />
          </div>
        </div>
    </div>
    );
  }
}
export default FinoSides;
