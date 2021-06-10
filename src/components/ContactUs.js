import Aos from "aos";
import React, { Component } from "react";
import { Data } from "../Data/Data";
class ContactUs extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <div
        id="contactus"
        className="container-fluid"
        style={{ textAlign: "center", marginTop: 30 }}
      >
        <div className="row">
          <div
            className="col s12 m6 offset-l1 l5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-once="false"
            data-aos-delay="0"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            style={styleBox.leftBox}
          >
            <div className="container-fluid">
              <h5 style={styleBox.heading}>How to Find {" & "} Contact Us</h5>
              <table className="centered ">
                <thead style={{fontFamily: "Lobster, cursive",fontSize:20}}>
                  <tr >
                    <th>Days</th>
                    <th>Timings</th>
                  </tr>
                </thead>

                <tbody style={{fontFamily: "Lobster, cursive"}}>
                  <tr>
                    <td>Monday</td>
                    <td>
                      {Data["restaurant-time-info"]["mon"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["mon"][0].close}
                    </td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>
                      {Data["restaurant-time-info"]["tue"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["tue"][0].close}
                    </td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>
                      {Data["restaurant-time-info"]["wed"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["wed"][0].close}
                    </td>
                  </tr>
                  <tr>
                    <td>Thrusday</td>
                    <td>
                      {Data["restaurant-time-info"]["thu"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["thu"][0].close}
                    </td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>
                      {Data["restaurant-time-info"]["fri"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["fri"][0].close}
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>
                      {Data["restaurant-time-info"]["sat"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["sat"][0].close}
                    </td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>
                      {Data["restaurant-time-info"]["sun"][0].open +
                        " - " +
                        Data["restaurant-time-info"]["sun"][0].close}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="col s12 m6 l5"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="0"
            data-aos-once="false"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            style={styleBox.RightBox}
          >
            <div
              className="container-fluid"
              style={{
                marginTop: 50,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462116.668402207!2d66.87528096064035!3d25.193559923097947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1623323513375!5m2!1sen!2s"
                width="400"
                height="470"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="location"
              ></iframe>

              <div
                style={{
                  position: "absolute",
                  width: "80%",
                  bottom: 10,
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                <small
                  style={{ lineHeight: 1.8, fontSize: 0, background: "#fff" }}
                >
                  <a href="https://googlemapsembed.net/">Embed Google Map</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styleBox = {
  leftBox: {
    background: "rgb(239,239,239,0.8)",
    height: 560,
    display: "inline-block",
  },
  heading: {
    fontFamily: "Lobster, cursive",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  RightBox: {
    background: "rgb(239,239,239,0.8)",
    height: 560,
    display: "inline-block",
  },
};

export default ContactUs;
