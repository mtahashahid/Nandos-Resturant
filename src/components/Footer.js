import React, { Component } from "react";
import { Data } from "../Data/Data";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer #212121 grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5
                  className="white-text"
                  style={{ fontFamily: "Lobster, cursive", fontSize: 35 }}
                >
                  {Data["restaurant-info"].name}
                </h5>
                <p
                  className="grey-text text-lighten-4"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: 18,
                    paddingRight: 28,
                  }}
                >
                  The Nando’s story started centuries ago, when the Portuguese
                  explorers set sail for the East. The winds of Africa called
                  them ashore and it was there that they were introduced to the
                  African Bird’s Eye Chilli – more commonly known as PERi-PERi.
                  A spice like no other, they used it to create a unique
                  PERi-PERi sauce that put fire in their bellies and ignited
                  passion in their souls.
                </p>
                <p>{Data["restaurant-info"].address}</p>
              </div>
              <div className="col l3 s12">
                <h5
                  className="white-text"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  Payment Options
                </h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      <i
                        className="fa fa-credit-card"
                        style={{
                          marginBottom: 10,
                          marginTop: 15,
                          padding: 5,
                          height: 30,
                        }}
                      ></i>
                      {Data["restaurant-info"]["payment-methods"][0].type}
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      <i
                        class="fa fa-usd"
                        style={{ marginBottom: 10, padding: 5, height: 30 }}
                      ></i>
                      {Data["restaurant-info"]["payment-methods"][1].type}
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      <i
                        class="fa fa-money"
                        style={{ marginBottom: 10, padding: 5, height: 30 }}
                      ></i>
                      {Data["restaurant-info"]["payment-methods"][2].type}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text" style={{ fontFamily: "Cormorant Garamond" }}>Social Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3"  href="#!">
                      <i style={{marginRight: 4,marginTop:20}} class="fa fa-facebook"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      <i style={{marginRight: 4,marginTop:20}} class="fa fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      <i style={{marginRight: 4,marginTop:20}} class="fa fa-instagram"></i>Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div class="container">
              © 2021 Copyright Text
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
