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
        <h2 className="mb-4">Our Services</h2>
        <hr />
        <Row>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3>E-Commerce</h3>
            <p style={textStyle}>
              Reach global markets, enhance customer engagement, and drive sales with our tailored e-commerce solutions.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Cybersecurity</h3>
            <p style={textStyle}>
              Protect your digital assets with our comprehensive cybersecurity solutions against evolving threats.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-code"></i>
            </div>
            <h3>Software Development</h3>
            <p style={textStyle}>
              Get custom software solutions tailored to your business needs, from web applications to mobile apps.
            </p>
          </Col>

          <Col xs={12} sm={6} lg={6} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-network-wired"></i>
            </div>
            <h3>Network Solutions</h3>
            <p style={textStyle}>
              Design and implement robust network solutions for seamless connectivity and performance.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services2;
