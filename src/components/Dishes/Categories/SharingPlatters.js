import React, { Component } from "react";
import M from 'materialize-css';
import {Data} from '../../../Data/Data';
import ProductSlider from "../ProductSlider";
import posterImg from '../../../assets/images/Parallaxes/sharingPlatters.jpg'
class SharingPlatters extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return <div>
         <div className="section white" style={{ paddingBottom: "2rem" }}>
          <div className="row container" style={{ marginBottom: 0 }}>
            <h2
              style={{
                fontFamily: "Parisienne, cursive",
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              {Data.categorys[3].name}
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
              {Data.categorys[3].description}
            </p>
          </div>
        </div>
        <div className="parallax-container">
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
              data={Data.categorys[3]["menu-items"]}
              styleClass={"lightSliders"}
            ></ProductSlider>
          </div>
          <div className="parallax">
            <img src={posterImg} width="100%" alt="parallax" />
          </div>
        </div>
    </div>;
  }
}
export default SharingPlatters;
