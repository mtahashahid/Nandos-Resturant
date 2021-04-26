import React, { Component } from "react";
import bannerImg from "../assets/images/banner.jpg";
class Banner extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
            <p className="name">Nando's</p>
          <div className="parallax">
            <img src={bannerImg} alt="banner"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
