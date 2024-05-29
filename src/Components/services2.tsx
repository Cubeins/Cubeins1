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
    // textAlign: "center",
    marginBottom: "30px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 className=" mb-4">Our Services</h2>
        <p className=" mb-5" style={textStyle}>
          We offer a wide range of technology solutions to meet the needs of our
          diverse client base. Our services are designed to help your business
          thrive in the digital age.
        </p>
        <Row>
          <Col xs={12} md={6} lg={4} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-shop"></i>
            </div>
            <h3>E-Commerce</h3>
            <p style={textStyle}>
              Leverage the power of e-commerce to reach a global audience,
              enhance customer engagement, and drive sales growth with our
              tailored solutions.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Cybersecurity</h3>
            <p style={textStyle}>
              Protect your digital assets with our comprehensive cybersecurity
              solutions, designed to safeguard against evolving threats.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-code"></i>
            </div>
            <h3>Software Development</h3>
            <p style={textStyle}>
              Develop custom software solutions tailored to your specific
              business needs, from web applications to mobile apps.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-cogs"></i>
            </div>
            <h3>IT Consulting</h3>
            <p style={textStyle}>
              Our experts provide strategic IT consulting to help you navigate
              complex technology landscapes and achieve your business goals.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-network-wired"></i>
            </div>
            <h3>Network Solutions</h3>
            <p style={textStyle}>
              Design and implement robust network solutions that ensure seamless
              connectivity and high performance for your enterprise.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Data Analytics</h3>
            <p style={textStyle}>
              Harness the power of data with our analytics services, turning raw
              data into actionable insights to drive informed decision-making.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services2;
