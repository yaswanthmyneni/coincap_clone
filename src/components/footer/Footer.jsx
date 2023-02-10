import { Space } from "antd";
import React, { Component } from "react";
import { AiFillFacebook, AiOutlineTwitter } from "../../assets/icons/icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <section className="footer-section">
          <h3>COINCAP.IO</h3>
          <Space
            direction="vertical"
            size="small"
            style={{
              display: "flex",
            }}
          >
            <small>Methodology</small>
            <small>Support</small>
            <small>Our API</small>
            <small>Rate Comparison</small>
            <small>Careers</small>
          </Space>
        </section>
        <section className="footer-section">
          <h3>LEGALS</h3>
          <Space
            direction="vertical"
            size="small"
            style={{
              display: "flex",
            }}
          >
            <small>Terms of Service</small>
            <small>Privacy Policy</small>
          </Space>
          <h3>DISCLAIMER</h3>
          <small>
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </small>
        </section>
        <section className="footer-section">
          <h3>FOLLOW US</h3>
          <div>
            <AiOutlineTwitter className="icon-size" />
            <AiFillFacebook className="icon-size" />
          </div>
        </section>
        <section className="footer-section">
          <h3>COINCAP APP AVAILABLE ON</h3>
          <img
            className="block"
            src="https://coincap.io/static/images/stores/google_play.svg"
            alt="image"
          />
          <img
            className="block"
            src="https://coincap.io/static/images/stores/apple_store.svg"
            alt="image"
          />
        </section>
      </footer>
    );
  }
}

export { Footer };
