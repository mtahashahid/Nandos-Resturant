import React, { Component } from "react";
import { Data } from "../../../Data/Data";
import ProductSlider from "../ProductSlider";

class TrySomethingNew extends Component {
  render() {
    return (
      <div>
        <div className="section white">
          <div className="row container">
            <h2
              style={{
                fontFamily: "Parisienne, cursive",
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              {Data.categorys[7].name}
            </h2>
            <p>
                {Data.categorys[7].description}
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
            data={Data.categorys[7]["menu-items"]}
            styleClass={"lightSliders"}
          ></ProductSlider>
        </div>
      </div>
    );
  }
}
export default TrySomethingNew;
