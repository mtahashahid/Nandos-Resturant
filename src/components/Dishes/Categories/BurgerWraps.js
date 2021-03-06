import React, { Component } from "react";
import M from "materialize-css";
import { Data } from "../../../Data/Data";
import ProductSlider from "../ProductSlider";
import posterImg from "../../../assets/images/Parallaxes/burger.jpg";

class BurgerWraps extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div id="urgersPitasWraps">
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
              {Data.categorys[8].name}
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
              {Data.categorys[8].discription}
            </p>
          </div>
        </div>

        <div className="parallax-container">
          <div className="container">
            <h3 style={{ fontFamily: "Lobster, cursive"}}>
              Menu Items
            </h3>
            <ProductSlider
              data={Data.categorys[8]["menu-items"]}
              styleClass={"light-slider"}
            />
          </div>

          <div className="parallax">
            <img alt="" width="100%" src={posterImg} />
          </div>
        </div>
      </div>
    );
  }
}
export default BurgerWraps;
