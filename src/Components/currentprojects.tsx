import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ev from "./images/ev-car2.svg"; // Replace with the actual path to your EV image
import billingImg from "./images/image.png"; // Replace with the actual path to your billing software image

function CurrentProjects() {
  const sectionStyle = {
    backgroundColor: "#ffffff",
    color: "#333",
    padding: "50px 0",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "15px",
  };

  const textStyle = {
    color: "#6c757d",
  };

  const colStyle = {
    // textAlign: "center",
    marginBottom: "30px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 className="mb-4">What We Are Working On</h2>
        <p className="mb-5" style={textStyle}>
          Our current projects are centered around advancing EV charging
          technology. We are committed to developing innovative solutions to
          meet the growing demand for efficient and sustainable EV charging
          systems.
        </p>
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-car-battery"></i>
            </div>
            <h3>EV Charging Stations</h3>
            <p style={textStyle}>
              Developing state-of-the-art electric vehicle charging stations
              that are fast, reliable, and widely accessible.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={ev}
              alt="EV Charging Stations"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-file-invoice-dollar"></i>
            </div>
            <h3>Billing Software</h3>
            <p style={textStyle}>
              Creating comprehensive billing software solutions that streamline
              invoicing, payments, and financial reporting for businesses of all
              sizes.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={billingImg}
              alt="Billing Software"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CurrentProjects;