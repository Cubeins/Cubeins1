import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import uploadedImage from "./Components"; // Adjust the path as needed

function AboutUs() {
  const sectionStyle = {
    backgroundColor: "#f8f9fa",
    color: "#495057",
    padding: "50px 0",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle = {
    fontSize: "3rem",
    marginBottom: "15px",
    color: "#007bff",
  };

  const textStyle = {
    color: "#6c757d", // Adjusted text color for better readability
    lineHeight: "1.6",
    marginBottom: "20px", // Added margin bottom for better separation between sections
  };

  const colStyle = {
    marginBottom: "30px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h1 className="mb-4">About Us</h1>
        <hr />
        <p className="mb-5" style={textStyle}>
          We are dedicated to revolutionizing the EV car charging industry in India. With a mission to establish a comprehensive and accessible EV charging network, we aim to promote the widespread adoption of electric vehicles and contribute to a greener future.
        </p>

        <h3 className="mb-3">Our Mission</h3>
        <p className="mb-5" style={textStyle}>
          Our mission is to develop innovative and efficient EV charging solutions, ensuring seamless charging experiences for EV owners across India.
        </p>

        <h3 className="mb-3">Executive Summary</h3>
        <p className="mb-5" style={textStyle}>
          Our company is strategically positioned to address the growing need for reliable EV charging infrastructure in India. With a population of 1.3 billion and a rapidly expanding EV market, we aim to lead the industry by providing cutting-edge charging technology and exceptional customer service.
        </p>

        <Row>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-charging-station"></i>
            </div>
            <h3>Fast Charging</h3>
            <p style={textStyle}>
              Our solutions provide fast and efficient charging for electric vehicles, minimizing charging times and maximizing convenience for EV owners.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-plug"></i>
            </div>
            <h3>Reliable Infrastructure</h3>
            <p style={textStyle}>
              We develop and install robust EV charging infrastructure, ensuring reliability and accessibility for EV owners across India.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-battery-full"></i>
            </div>
            <h3>Advanced Technology</h3>
            <p style={textStyle}>
              Leveraging the latest advancements in technology, we offer smart charging solutions that optimize energy usage and reduce environmental impact.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-users"></i>
            </div>
            <h3>Customer Support</h3>
            <p style={textStyle}>
              Our dedicated customer support team provides prompt assistance and ensures a seamless experience for all our clients.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
