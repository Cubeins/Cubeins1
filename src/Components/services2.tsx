import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Services2() {
  const sectionStyle = {
    backgroundColor: "#f8f9fa",
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
    marginBottom: "30px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 className="mb-4">Our EV Charging Services</h2>
        <hr />
        <Row>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-charging-station"></i>
            </div>
            <h3>Home Charging Solutions</h3>
            <p style={textStyle}>
              Convenient and efficient home charging solutions for your electric vehicle, ensuring you start every day with a full charge.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-industry"></i>
            </div>
            <h3>Commercial Charging Stations</h3>
            <p style={textStyle}>
              Scalable and reliable commercial charging stations designed for businesses, helping you cater to your customers' needs.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-tools"></i>
            </div>
            <h3>Installation & Maintenance</h3>
            <p style={textStyle}>
              Professional installation and maintenance services to ensure your EV charging stations are always operational.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-solar-panel"></i>
            </div>
            <h3>Renewable Energy Integration</h3>
            <p style={textStyle}>
              Integrate renewable energy sources with your EV charging infrastructure for a sustainable and eco-friendly solution.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services2;
