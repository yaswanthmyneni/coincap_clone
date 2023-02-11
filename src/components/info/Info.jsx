import React, { Component } from "react";
import { Col, Row } from "antd";
import { RxTriangleLeft } from "../../assets/icons/icons";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <section className="info-container">
        <div className="content-width pt-2rem">
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col className="gutter-row"  span={4}>
              <div className="text-align">
                <h4>MARKET CAP</h4>
                <h2>$1.23T</h2>
              </div>
            </Col>
            <Col className="gutter-row"  span={4}>
              <div className="text-align">
                <h4>EXCHANGE VOL</h4>
                <h2>$57.24B</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div className="text-align">
                <h4>ASSETS</h4>
                <h2>2,295</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div className="text-align">
                <h4>EXCHANGES</h4>
                <h2>73</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div className="text-align">
                <h4>MARKET</h4>
                <h2>12,563</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div className="text-align">
                <h4>BTC DOM INDEX</h4>
                <h2>34.3%</h2>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mobile-view">
          <p>Market Snapshot</p>
          <RxTriangleLeft className="arrow-icon" />
        </div>
      </section>
    );
  }
}

export { Info };
