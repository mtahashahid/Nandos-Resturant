import React, { Component } from "react";
import { Data } from "../../../Data/Data";
import ProductSlider from "../ProductSlider";

class Desserts extends Component {
  render() {
    return (
      <div>
        <div className="section white" style={{ paddingBottom: "2rem" }}>
          <div className="row container" style={{ marginBottom: 0 }}>
            <h2
              style={{
                fontFamily: "Parisienne, cursive",
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >{Data.categorys[4].name}</h2>
            <p className="grey-text text-darken-3 lighten-3">
              {Data.categorys[3].description}
            </p>
          </div>
        </div>
        <div className="container">
            <h3
              style={{
                fontFamily: "Lobster, cursive",
                // fontStyle: "italic"
              }}
            >
              Menu
            </h3>
            <ProductSlider
              data={Data.categorys[4]["menu-items"]}
              styleClass={"lightSliders"}
            ></ProductSlider>
          </div>
      </div>
    );
  }
}
export default Desserts;
